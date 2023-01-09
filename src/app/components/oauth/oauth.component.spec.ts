import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OAuthComponent } from './oauth.component';

describe('OauthComponent', () => {
  let component: OAuthComponent;
  let fixture: ComponentFixture<OAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
