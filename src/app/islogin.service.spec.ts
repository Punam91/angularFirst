import { TestBed, inject } from '@angular/core/testing';

import { IsloginService } from './islogin.service';

describe('IsloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsloginService]
    });
  });

  it('should be created', inject([IsloginService], (service: IsloginService) => {
    expect(service).toBeTruthy();
  }));
});
