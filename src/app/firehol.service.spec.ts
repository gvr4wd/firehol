import { TestBed, inject } from '@angular/core/testing';

import { FireholService } from './firehol.service';

describe('FireholService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireholService]
    });
  });

  it('should be created', inject([FireholService], (service: FireholService) => {
    expect(service).toBeTruthy();
  }));
});
