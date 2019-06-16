import { TestBed, inject } from '@angular/core/testing';

import { EmployeehttpService } from './employeehttp.service';

describe('EmployeehttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeehttpService]
    });
  });

  it('should be created', inject([EmployeehttpService], (service: EmployeehttpService) => {
    expect(service).toBeTruthy();
  }));
});
