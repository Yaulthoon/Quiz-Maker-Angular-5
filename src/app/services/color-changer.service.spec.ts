import { TestBed, inject } from '@angular/core/testing';

import { ColorChangerService } from './color-changer.service';

describe('ColorChangerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorChangerService]
    });
  });

  it('should be created', inject([ColorChangerService], (service: ColorChangerService) => {
    expect(service).toBeTruthy();
  }));
});
