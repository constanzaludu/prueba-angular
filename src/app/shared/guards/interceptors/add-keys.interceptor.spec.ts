import { TestBed } from '@angular/core/testing';

import { AddKeysInterceptor } from './add-keys.interceptor';

describe('AddKeysInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddKeysInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AddKeysInterceptor = TestBed.inject(AddKeysInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
