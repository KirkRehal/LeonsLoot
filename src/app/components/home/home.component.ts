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

    var connected = new ListNode(8, new ListNode(4, new ListNode(5)));
    var head1 = new ListNode(4, new ListNode(1, connected));
    var head2 = new ListNode(5, new ListNode(6, new ListNode(1, connected)));
    // var head2 = new Node(5);
    // var newNode = new Node(6);
    // head2.next = newNode;
    // newNode = new Node(1);
    // head2.next.next = newNode;
    // newNode = new Node(8);
    // head2.next.next.next = newNode;
    // newNode = new Node(4);
    // head2.next.next.next.next = newNode;
    // newNode = new Node(5);
    // head2.next.next.next.next.next = newNode;

    // var head1 = new Node(4);
    // newNode = new Node(1);
    // head1.next = newNode;
    // newNode = new Node(8);
    // head1.next.next = newNode;
    // head2.next.next.next = newNode;
    // newNode = new Node(30);
    // head1.next.next = newNode;
    // head1.next.next.next = null;
    
    // Find the intersection node of two linked lists
    // var intersect_node = this.intersectPoint(head1, head2);
    // console.log("INTERSECTION POINT:", intersect_node.val);
    this.test();
  }

  private getLatestEventDate(date1: Date, date2: Date): Date {
    if (date1.getTime() > date2.getTime()) {
      return date1;
    }

    return date2;
  }

  private test() {
    let stdin = `a->b
    r->s
    b->c
    x->c
    q->r
    y->x
    w->z
    a,q,w
    a,c,r
    y,z,a,r
    a,w';`

    const lines = stdin.trim().split('\n');
    const nodeDictionary = {};
    for (let line of lines) {
      line = line.trim();

      //Build the dictionary
      if(line.includes('->')) {
        // console.log(line);
        const source = line[0];
        const dest = line[3];
        nodeDictionary[source] = dest;
      } 

      //Use the built dictionary to determine duplicates
      else {
        console.log(this.hasDuplicates(line.split(','), nodeDictionary));
      }
    }

    console.log(nodeDictionary);
  }

  private hasDuplicates(nodes: string[], nodeDictionary: {}): boolean {
    var hasDuplicates = false;
    const seenDictionary = {};

    for(var i = 0; i < nodes.length; i++) {
      var head = nodes[i];
      
      while(head != null) {
        if (seenDictionary[head]) {
          hasDuplicates = true;
          break;
        }

        seenDictionary[head] = true;
        head = nodeDictionary[head];
      }

      if (hasDuplicates) {
        break;
      }
    }

    return hasDuplicates;
  }

  private intersectPoint(headA: ListNode, headB: ListNode): ListNode {
    // var lengthA = this.getLength(headA);
    // var lengthB = this.getLength(headB);

    // while (lengthA > lengthB) {
    //   headA = headA.next;
    //   lengthA--;
    // }

    // while (lengthB > lengthA) {
    //   headB = headB.next;
    //   lengthB--;
    // }

    // while (headA != headB) {
    //   headA = headA.next;
    //   headB = headB.next;
    // }

    // if(headA && headB) {
    //   return headA.data;
    // }

    // return 0;
    let ptr1 = headA;
    let ptr2 = headB;

    while (ptr1 != ptr2) {
        ptr1 = ptr1 === null ? headB : ptr1.next; 

        ptr2 = ptr2 === null ? headA : ptr2.next; 

    }
    
    return ptr1;
  }

  private getLength(head: Node): number {
    var length = 0;
    while (head != null) {
      length++;
      // head = head.next;
    }

    return length
  }
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
