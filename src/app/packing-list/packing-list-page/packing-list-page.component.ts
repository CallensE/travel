import { Component, OnInit } from '@angular/core';
import { PackingListItemService } from '../../services/packing-list-item.service';
import { Observable } from 'rxjs';
import { PackingListItem } from '../../models/packing-list-item';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PackingListItemFormComponent } from '../packing-list-item-form/packing-list-item-form.component';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-packing-list-page',
  templateUrl: './packing-list-page.component.html',
  styleUrl: './packing-list-page.component.scss',
  standalone: true,
  imports: [AsyncPipe, RouterLink, PackingListItemFormComponent, HighlightDirective]
})
export class PackingListPageComponent implements OnInit {
  packingList$!: Observable<PackingListItem[]>;
  highLightColor = 'yellow';

  constructor(private packingListItemService: PackingListItemService) {  }

  ngOnInit(): void {
    this.packingList$ = this.packingListItemService.getAllPackingListItems();
  }

  addNewItem(item: string) {
    this.packingListItemService.addPackingListItem(item).subscribe();
    this.packingList$ = this.packingListItemService.getAllPackingListItems();
  }
}
