import { TestBed } from '@angular/core/testing';

import { PackingListItemService } from './packing-list-item.service';

describe('PackingListItemService', () => {
  let service: PackingListItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackingListItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
