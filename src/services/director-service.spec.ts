import { DirectorServiceService } from './director-service';
import { TestBed } from '@angular/core/testing';

describe('DirectorServiceService', () => {
  let service: DirectorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
