import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { AppRoutingModule } from './app-routing.module';
import { MembersComponent } from './components/members/members.component';
import { StatsComponent } from './components/stats/stats.component';
import { HistoryComponent } from './components/history/history.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { GoogleHeaderInterceptor } from './google-header.interceptor';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RulesComponent } from './components/rules/rules.component';
import { HeistComponent } from './components/heist/heist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
// import { OAuthComponent } from './components/oauth/oauth.component';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './components/badge/badge.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeComponent } from './components/home/home.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LuckyDavidComponent } from './components/lucky-david/lucky-david/lucky-david.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrackerComponent,
    MembersComponent,
    StatsComponent,
    HistoryComponent,
    RulesComponent,
    HeistComponent,
    // OAuthComponent,
    BadgeComponent,
    HomeComponent,
    LuckyDavidComponent
  ],
  imports: [
    MatSliderModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    GoogleMapsModule
  ],
  providers: [
    // {  
    // provide: HTTP_INTERCEPTORS,  
    // useClass: GoogleHeaderInterceptor,  
    // multi: true  
    // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
