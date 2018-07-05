import { TestBed, inject } from '@angular/core/testing';

import { ComicsService } from './comics.service';
import { HttpClientModule } from '@angular/common/http';

describe('ComicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [ComicsService]
    });
  });

  it('should be created', inject([ComicsService], (service: ComicsService) => {
    expect(service).toBeTruthy();
  }));
});
