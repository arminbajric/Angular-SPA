import { TestBed } from '@angular/core/testing';

import { UserValidationsService } from './user-validations.service';

describe('UserValidationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserValidationsService = TestBed.get(UserValidationsService);
    expect(service).toBeTruthy();
  });
});
