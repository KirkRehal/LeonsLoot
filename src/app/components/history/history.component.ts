import { Component, OnInit, ViewChild } from '@angular/core';
import { tap } from 'rxjs';
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
import { ParticipantName, PARTICPANT_LIST } from '../../constants/participants.constant';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent
  public chartOptions: Partial<ChartOptions> = {};
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
        this.setChartData();
      })
    ).subscribe();


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

    if (false) {
      this.chartOptions = {
        series: [
        {
          name: "Bob",
          data: [
            {
              x: "Design",
              y: [
                new Date("2019-03-05").getTime(),
                new Date("2019-03-08").getTime()
              ]
            },
            {
              x: "Code",
              y: [
                new Date("2019-03-02").getTime(),
                new Date("2019-03-05").getTime()
              ]
            },
            {
              x: "Code",
              y: [
                new Date("2019-03-05").getTime(),
                new Date("2019-03-07").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-03").getTime(),
                new Date("2019-03-09").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2019-03-08").getTime(),
                new Date("2019-03-11").getTime()
              ]
            },
            {
              x: "Validation",
              y: [
                new Date("2019-03-11").getTime(),
                new Date("2019-03-16").getTime()
              ]
            },
            {
              x: "Design",
              y: [
                new Date("2019-03-01").getTime(),
                new Date("2019-03-03").getTime()
              ]
            }
          ]
        }],
        chart: {
          height: 450,
          type: "rangeBar",
          toolbar: { show: false}
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%"
          }
        },
        xaxis: {
          type: "datetime"
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
          position: "top",
          horizontalAlign: "left"
        }
      };
    }
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
