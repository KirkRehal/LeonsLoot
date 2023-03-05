import { Component, OnInit, ViewChild } from '@angular/core';
import { interval, tap } from 'rxjs';
import { HistoryService } from '../../services/history.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexLegend,
  ApexYAxis
} from "ng-apexcharts";
import { HistoricalData } from '../../models/historical-data.model';
import * as _ from 'lodash';
import { ParticipantName, PARTICIPANT_STATS, PARTICPANT_LIST } from '../../constants/participants.constant';
import { PossessionLeaderboardEntry } from 'src/app/models/possession-entry.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent
  public chartOptions: Partial<ChartOptions> = {};
  public possessionLeaderboardEntries: PossessionLeaderboardEntry[] = [];

  private historicalData: HistoricalData[] = [];
  private chartDataWithoutSeries: Partial<ChartOptions> = {
    chart: {
      // height: 450,
      type: "rangeBar",
      toolbar: { show: false},
      zoom: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "70%",
        borderRadiusApplication: "around",
        borderRadius: 25,
        borderRadiusWhenStacked: 'all'
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          // fontSize: '18px',
          colors: 'white'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          // fontSize: '32px',
          colors: 'white'
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      }
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left"
    }
  };
  private participantColorMap = {} as any;

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.setParticipantColorMap();

    this.historyService.getSheet().pipe(
      tap(data => {
        this.historicalData = data;
        this.createPossessionLeaderboardEntries();
        this.setChartData();
      })
    ).subscribe();

    interval(1000).pipe(
      tap(() => {
        // this.createPossessionLeaderboardEntries();
      })
    ).subscribe();
  }

  private createPossessionLeaderboardEntries(): void {
    const posessionTimeDict: { [name: string]: number } = {};

    _.each(this.historicalData, (data, i) => {
      const startPossessionTime = data.takenOn.getTime();
      const endPossessionTime = this.historicalData[i+1]?.takenOn?.getTime() ?? Date.now();

      const elapsedPossessionTime = endPossessionTime - startPossessionTime;
      if (posessionTimeDict[data.owner]) {
        posessionTimeDict[data.owner] = posessionTimeDict[data.owner] + elapsedPossessionTime; 
      }
      else {
        posessionTimeDict[data.owner] = elapsedPossessionTime;
      }
    });

    this.possessionLeaderboardEntries = _.map(_.keys(posessionTimeDict), (key: string) => {
      var elapsedPossessionTime = posessionTimeDict[key] / 1000;

      var days = Math.floor(elapsedPossessionTime / 86400);
      elapsedPossessionTime -= days * 86400;

      var hours = Math.floor(elapsedPossessionTime / 3600) % 24;
      elapsedPossessionTime -= hours * 3600;

      var minutes = Math.floor(elapsedPossessionTime / 60) % 60;
      elapsedPossessionTime -= minutes * 60;

      var seconds = Math.floor(elapsedPossessionTime % 60);
      

      const leaderboardEntry: PossessionLeaderboardEntry & { profileImageSrc: string, isCurrentOwner: boolean } = {
        owner: key as ParticipantName,
        possessionTimeDays: days,
        possessionTimeHours: hours,
        possessionTimeMinutes: minutes,
        possessionTimeSeconds: seconds,
        possessionTimeNumber: posessionTimeDict[key],
        profileImageSrc: _.find(PARTICIPANT_STATS, p => p.name === key).profileImageSrc,
        isCurrentOwner: _.findIndex(this.historicalData, d => d.owner === key) === this.historicalData.length - 1
      };

      return leaderboardEntry;
    });

    this.possessionLeaderboardEntries = _.orderBy(this.possessionLeaderboardEntries, p => p.possessionTimeNumber, 'desc');
  }
 
  private setChartData(): void {
    let series: ApexAxisChartSeries = [
      {
        data: _.map(this.historicalData, (dataRow, i) => {
          const hasFutureOwner: boolean = !!this.historicalData[i+1];
          const futureDate: Date = hasFutureOwner ? this.historicalData[i+1].takenOn : new Date();

          const formattedDataRow = {
            x: dataRow.owner,
            y: [dataRow.takenOn.getTime(), futureDate.getTime()],
            fillColor: this.participantColorMap[dataRow.owner]
          };

          return formattedDataRow;
        })
      }
    ];

    this.chartOptions = {
      series: series, 
      ...this.chartDataWithoutSeries
    };

  }

  private setParticipantColorMap() {
    _.map(PARTICPANT_LIST, PARTICIPANT => {
      let color: string = '';

      switch(PARTICIPANT) {
        case 'Aaron':
        case 'Jess':
          color = '#00FF00'
          break;
        case 'Anthony':
        case 'Carlos':
        case 'David Hwang':
          color = '#FFA500';
          break;
        case 'Chaya':
        case 'Tina':
          color = '#D3D3D3';
          break;
        case 'David Li':
        case 'Stephanie':
          color = '#FF0000';
          break;
        case 'Kirk':
        case 'Karen':
          color = '#0000FF';
          break;
        default:
          color = '#000000';
          break;
      };

      this.participantColorMap[PARTICIPANT] = color;
    });
  }
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
};
