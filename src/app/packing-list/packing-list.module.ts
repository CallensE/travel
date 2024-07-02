import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PackingListPageComponent } from './packing-list-page/packing-list-page.component';
import { PackingListItemPageComponent } from './packing-list-item-page/packing-list-item-page.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [PackingListPageComponent, PackingListItemPageComponent],
  imports: [
    CommonModule, AsyncPipe, RouterLink
  ],
  exports: [PackingListPageComponent]
})
export class PackingListModule { }
