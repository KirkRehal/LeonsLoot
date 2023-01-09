import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { TrophyTrackerModel } from "../models/trophy-tracker.model";

@Injectable({
    providedIn: 'root'
})
export class TrackerService {
    private functionURL = 'https://tiletrackerleonsloot2.azurewebsites.net/api/FindLocation?code=zpWjhdouXSr6XiMU0xrm7OvWh0b9yeFvbgKtXSjoVXnUAzFuK8Mk1Q==';
    private f2 = 'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0';

    constructor(private httpClient: HttpClient) { }

    public getTrophyLocation(): Observable<TrophyTrackerModel> {
        return this.httpClient.get<TrophyTrackerModel>(this.functionURL);
    }
}