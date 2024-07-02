import { Component, Input, OnInit } from '@angular/core';
import { PackingListItemService } from '../../services/packing-list-item.service';
import { PackingListItem } from '../../models/packing-list-item';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-packing-list-item-page',
  templateUrl: './packing-list-item-page.component.html',
  styleUrl: './packing-list-item-page.component.scss'
})
export class PackingListItemPageComponent implements OnInit {

  packingListItem$!: Observable<PackingListItem>;

  @Input('id') packingListItemId!: number; 

  constructor(private packingListItemService: PackingListItemService, private route: ActivatedRoute) {    
  }

  ngOnInit(): void {
    this.route.data.subscribe(x => console.log(x));
    this.packingListItem$ = this.packingListItemService.getById(this.packingListItemId);
  }
}
