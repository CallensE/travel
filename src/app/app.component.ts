import {
  AsyncPipe,
  CommonModule,
  DatePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { PackingListPageComponent } from './packing-list/packing-list-page/packing-list-page.component';
import { PackingListModule } from './packing-list/packing-list.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    DatePipe,
    UpperCasePipe,
    TemperaturePipe,
    FormsModule,
    AsyncPipe,
    MenuComponent,
    PackingListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent{
  title = 'My travel app';
  imgLocation = '/images/travel.jpg';

  changeTitle(): void {
    this.title = 'My travel app - changed title';
  }
}
