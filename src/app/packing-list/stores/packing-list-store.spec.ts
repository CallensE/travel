import { TestBed } from '@angular/core/testing';

import { PackingListStore } from './packing-list-store';

describe('PackingListStore', () => {
  let service: PackingListStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackingListStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
