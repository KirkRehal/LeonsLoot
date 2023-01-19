import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyDavidComponent } from './lucky-david.component';

describe('LuckyDavidComponent', () => {
  let component: LuckyDavidComponent;
  let fixture: ComponentFixture<LuckyDavidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyDavidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuckyDavidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
