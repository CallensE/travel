import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { packingListItemResolver } from '../packing-list-item.resolver';

describe('packingListItemResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => packingListItemResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
