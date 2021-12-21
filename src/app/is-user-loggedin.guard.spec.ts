import { TestBed } from '@angular/core/testing';

import { IsUserLoggedinGuard } from './is-user-loggedin.guard';

describe('IsUserLoggedinGuard', () => {
  let guard: IsUserLoggedinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsUserLoggedinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
