import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GET_OAUTH_TOKEN_FROM_CONST, TIME_CONST, TOKEN_CONST } from '../constants/local-storage.const';


@Injectable({
  providedIn: 'root'
})
export class OAuthService {
  

  private oauthToken: string | null = localStorage.getItem(TOKEN_CONST);
  private timeStored: Date | null = localStorage.getItem(TIME_CONST) ? new Date(localStorage.getItem(TIME_CONST) as string) : null;
  private tokenTTLInMinutes = 60;

  constructor(public httpClient: HttpClient, private router: Router) { }

  public getToken(): string {
    if (this.isTokenExpired()) {
        this.getNewToken();
    }

    return this.oauthToken as string;
  }

  public setToken(token: string, time: Date): void {
    this.oauthToken = token;
    this.timeStored = time;

    localStorage.setItem(TOKEN_CONST, token);
    localStorage.setItem(TIME_CONST, time.toString());
  }

  private getNewToken() {
    const clientId = '189471745819-1q18g7rc544np25egcmijke0t6kh4ua7.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:4200/oauth';
    const responseType = 'token';
    const scope = 'https%3A//www.googleapis.com/auth/spreadsheets';
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    this.setLocationLocalStorage();

    location.href = url;
  }

  private isTokenExpired(): boolean {
    if (!this.oauthToken || !this.timeStored) {
        return true;
    }

    const now = new Date();
    this.timeStored.setMinutes(this.timeStored.getMinutes() + this.tokenTTLInMinutes);

    return now >= this.timeStored;
  }

  private setLocationLocalStorage(): void {
    const url = this.router.url;
    localStorage.setItem(GET_OAUTH_TOKEN_FROM_CONST, url);
  }
}