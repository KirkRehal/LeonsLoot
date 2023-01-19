import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private LUCKY_DAVID_CHANCE = 100;
  public luckyDavid: boolean = false;
  title = 'LeonsLoot';

  constructor() {
  }

  ngOnInit(): void {
    this.luckyDavid = this.getLuckyDavidChance() === 0;
  }

  private getLuckyDavidChance(): number {
    return Math.floor(Math.random() * this.LUCKY_DAVID_CHANCE);
  }
}
