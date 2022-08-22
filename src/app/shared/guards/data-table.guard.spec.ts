import { TestBed } from '@angular/core/testing';

import { DataTableGuard } from './data-table.guard';

describe('DataTableGuard', () => {
  let guard: DataTableGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DataTableGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
