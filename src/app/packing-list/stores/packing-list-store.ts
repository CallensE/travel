import { Injectable, OnInit } from '@angular/core';
import { PackingListItemService } from '../../services/packing-list-item.service';
import { BehaviorSubject } from 'rxjs';
import { PackingListItem } from '../../models/packing-list-item';

@Injectable({
  providedIn: 'root',
})
export class PackingListStore {
  #packingListItems = new BehaviorSubject<PackingListItem[]>([]);
  packingListItems$ = this.#packingListItems.asObservable();

  constructor(private packingListItemService: PackingListItemService) {
    this.packingListItemService.getAllPackingListItems().subscribe((items) => {
      this.#packingListItems.next(items);
    });
  }

  addPackingListItem(item: string) {
    this.packingListItemService.addPackingListItem(item).subscribe((item) => {
      this.#packingListItems.next([...this.#packingListItems.value, item]);
    });
  }
}
