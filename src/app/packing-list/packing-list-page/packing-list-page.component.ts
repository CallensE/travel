import { Component, OnDestroy, OnInit } from '@angular/core';
import { PackingListItemService } from '../../services/packing-list-item.service';
import { Observable, Subject, Subscription, interval, takeUntil, tap } from 'rxjs';
import { PackingListItem } from '../../models/packing-list-item';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PackingListItemFormComponent } from '../packing-list-item-form/packing-list-item-form.component';
import { HighlightDirective } from '../../directives/highlight.directive';
import { PackingListStore } from '../stores/packing-list-store';

@Component({
  selector: 'app-packing-list-page',
  templateUrl: './packing-list-page.component.html',
  styleUrl: './packing-list-page.component.scss',
  standalone: true,
  imports: [AsyncPipe, RouterLink, PackingListItemFormComponent, HighlightDirective]
})
export class PackingListPageComponent implements OnInit, OnDestroy {
  packingList$!: Observable<PackingListItem[]>;
  highLightColor = 'yellow';
  interval$ = interval(1000).pipe(tap(x => console.log(x)));
  destroy$ = new Subject<void>();

  constructor(private packingListStore: PackingListStore) {  }

  ngOnInit(): void {
    // this.interval$.pipe(takeUntil(this.destroy$)).subscribe();
    this.packingList$ = this.packingListStore.packingListItems$;
  }

  addNewItem(item: string) {
    this.packingListStore.addPackingListItem(item);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
