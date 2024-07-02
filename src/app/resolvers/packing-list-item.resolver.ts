import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PackingListItemService } from '../services/packing-list-item.service';
import { PackingListItem } from '../models/packing-list-item';

export const packingListItemResolver: ResolveFn<PackingListItem> = (route, state) => {
  const packingListItemService = inject(PackingListItemService);
  return packingListItemService.getById(+route.paramMap.get('id')!)
};
