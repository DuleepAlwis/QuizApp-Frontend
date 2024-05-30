import { TestBed } from '@angular/core/testing';

import { GlobalPropsService } from './global-props.service';

describe('GlobalPropsService', () => {
  let service: GlobalPropsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalPropsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
