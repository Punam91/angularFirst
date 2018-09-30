import { TestBed, inject } from '@angular/core/testing';

import { AdminAccessService } from './admin-access.service';

describe('AdminAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAccessService]
    });
  });

  it('should be created', inject([AdminAccessService], (service: AdminAccessService) => {
    expect(service).toBeTruthy();
  }));
});
