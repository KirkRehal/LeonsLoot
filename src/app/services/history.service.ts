import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { map, Observable, of } from 'rxjs';
import { ParticipantName } from '../constants/participants.constant';
import { HistoricalData } from '../models/historical-data.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor(private httpClient: HttpClient) { }

  public getSheet(): Observable<HistoricalData[]> {
    const url = 'https://gethistoryleonsloot.azurewebsites.net/api/HttpTrigger1?code=qFaF_ti7vCRjHPZYcDdU3pGbmkIOFSw1H4NhKLGsWS8jAzFuzKx1Pw==';
    return this.httpClient.get<HistoricalData[]>(url).pipe(
      map(data => _.map(data, row => {
        return {
          ...row,
          takenOn: new Date(row.takenOn)
        }
      }))
    );
  }

  public addRow(owner: ParticipantName, message: string): Observable<void> {
    const url = 'https://gethistoryleonsloot.azurewebsites.net/api/HttpTrigger1?code=qFaF_ti7vCRjHPZYcDdU3pGbmkIOFSw1H4NhKLGsWS8jAzFuzKx1Pw==';
    const row: HistoricalData = {
      owner: owner,
      takenOn: new Date(),
      heistMessage: message
    };

    return this.httpClient.post<void>(url, row);
  }
}