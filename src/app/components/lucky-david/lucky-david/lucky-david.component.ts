import { Component, OnInit } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-lucky-david',
  templateUrl: './lucky-david.component.html',
  styleUrls: ['./lucky-david.component.scss']
})
export class LuckyDavidComponent implements OnInit {
  public images: string[] = [
    'pineapple0.jpeg', 
    'pineapple1.jpg', 
    'pineapple2.jpg', 
    'pineapple3.jpg', 
    'pineapple4.jpg', 
    'pineapple5.jpg', 
    'pineapple4.jpg', 
    'pineapple3.jpg', 
    'pineapple2.jpg', 
    'pineapple1.jpg'
  ];

  private imageCount: number = 0;
  public imageIndex: number = 0;
  public refresh$: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.refresh$ = interval(50).pipe(
      tap(() => {
        this.imageIndex = this.imageCount++ % this.images.length;
      })
    )
  }

}
