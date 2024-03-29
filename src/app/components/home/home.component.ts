import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { filter, interval, map, Observable, of, repeatWhen, shareReplay, tap } from 'rxjs';
import { LAST_EVENT_DATE, NUM_DAYS_BETWEEN_EVENTS } from 'src/app/constants/heist-game.constant';
import { PARTICIPANT_STATS } from 'src/app/constants/participants.constant';
import { HistoricalData } from 'src/app/models/historical-data.model';
import { ParticipantModel } from 'src/app/models/participant.model';
import { TrophyTrackerModel } from 'src/app/models/trophy-tracker.model';
import { HistoryService } from 'src/app/services/history.service';
import { TrackerService } from 'src/app/services/tracker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private hotdogMarkerPath: string = './../../assets/images/heistdog.svg';
  public latestHistory: HistoricalData;
  public owner: ParticipantModel;
  public trophyTracker$: Observable<TrophyTrackerModel>;
  public posessionTime$: Observable<string>;
  public hostEventTimeRemaining$: Observable<number>;
  public center$: Observable<google.maps.LatLngLiteral>;

  public mapOptions: google.maps.MapOptions = {
    clickableIcons: false,
    gestureHandling: 'greedy',
    disableDefaultUI: true,
    keyboardShortcuts: false,
    zoom: 16,
    zoomControl: true,
    styles: [{featureType: 'poi', stylers: [{visibility: 'off'}]}]
  };

  public markerOptions: google.maps.MarkerOptions = {
    clickable: false,
    icon: {url: this.hotdogMarkerPath, scaledSize: new google.maps.Size(80, 80, 'px', 'px')},
  };

  constructor(
    private historyService: HistoryService,
    private trackerService: TrackerService
    ) { }

  ngOnInit(): void {
    this.historyService.getSheet().pipe(
      tap(history => {
        this.latestHistory = _.last(history);
        this.owner = _.find(PARTICIPANT_STATS, p => p.name === this.latestHistory.owner);
      })
    ).subscribe();

    this.trophyTracker$ = this.trackerService.getTrophyLocation().pipe(
      shareReplay(1)
    );

    this.center$ = this.trophyTracker$.pipe(
      map(trophy => {
        return <google.maps.LatLngLiteral> {
          lat: _.toNumber(trophy.latitude),
          lng: _.toNumber(trophy.longitude)
        };
      }),
      shareReplay(1)
    );

    this.posessionTime$ = interval(1000).pipe(
      filter(() => !!this.latestHistory),
      map(() => {
        const now = Date.now();
        var delta = Math.abs(now - this.latestHistory.takenOn.getTime()) / 1000;

        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        var seconds = Math.floor(delta % 60);
        
        return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
      }),
    );

    this.hostEventTimeRemaining$ = interval(1000).pipe(
      filter(() => !!this.latestHistory),
      map(() => {
        const latestEventDate = this.getLatestEventDate(this.latestHistory.takenOn, LAST_EVENT_DATE);
        const now = Date.now();
        const dayInMs = 1000 * 60 * 60 * 24;
        const newDate = new Date(latestEventDate.getTime() + (dayInMs * NUM_DAYS_BETWEEN_EVENTS));
        var delta = Math.abs(newDate.getTime() - now) / 1000;

        var days = Math.floor(delta / 86400);
        return days;
      })
    )
  }

  private getLatestEventDate(date1: Date, date2: Date): Date {
    if (date1.getTime() > date2.getTime()) {
      return date1;
    }

    return date2;
  }

}