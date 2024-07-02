import { Component, OnInit } from '@angular/core';
import { PackingListItemService } from '../../services/packing-list-item.service';
import { Observable } from 'rxjs';
import { PackingListItem } from '../../models/packing-list-item';

@Component({
  selector: 'app-packing-list-page',
  templateUrl: './packing-list-page.component.html',
  styleUrl: './packing-list-page.component.scss'
})
export class PackingListPageComponent implements OnInit {
  packingList$!: Observable<PackingListItem[]>;

  constructor(private packingListItemService: PackingListItemService) {  }

  ngOnInit(): void {
    this.packingList$ = this.packingListItemService.getAllPackingListItems();
  }
}
