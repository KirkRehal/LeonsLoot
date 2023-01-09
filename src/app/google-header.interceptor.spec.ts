import { TestBed } from '@angular/core/testing';

import { GoogleHeaderInterceptor } from './google-header.interceptor';

describe('GoogleHeaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GoogleHeaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GoogleHeaderInterceptor = TestBed.inject(GoogleHeaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
