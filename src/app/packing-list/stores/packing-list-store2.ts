import { Injectable, OnInit, signal } from '@angular/core';
import { PackingListItemService } from '../../services/packing-list-item.service';
import { BehaviorSubject } from 'rxjs';
import { PackingListItem } from '../../models/packing-list-item';

@Injectable({
  providedIn: 'root',
})
export class PackingListStore2 {
  #packingListItems = signal<PackingListItem[]>([]);
  packingListItems = this.#packingListItems.asReadonly();

  constructor(private packingListItemService: PackingListItemService) {
    this.packingListItemService.getAllPackingListItems().subscribe((items) => {
      this.#packingListItems.set(items);
    });
  }

  addPackingListItem(item: string) {
    this.packingListItemService.addPackingListItem(item).subscribe((item) => {
      this.#packingListItems.update((items) => [...items, item]);
    });
  }
}
