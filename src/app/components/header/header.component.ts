import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isDev: boolean = isDevMode();
  constructor() { }

  ngOnInit(): void {
  }

  public heist(): void {
    
  }
}
