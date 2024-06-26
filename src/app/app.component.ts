import {
  CommonModule,
  DatePipe,
  JsonPipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { FormsModule, NgForm } from '@angular/forms';
import { Destination } from './models/destination';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { DestinationFormComponent } from './destination-form/destination-form.component';
import { DestinationService } from './services/destination.service';

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
    DestinationListComponent,
    DestinationFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'My travel app';
  imgLocation = '/images/travel.jpg';
  destinations! : Destination[];

  constructor(private destinationService: DestinationService) {
    
  }

  ngOnInit(): void {
    this.destinationService.getAllDestinations().subscribe((allDestinations: Destination[]) => {
      this.destinations = allDestinations;
    });
  }

  changeTitle(): void {
    this.title = 'My travel app - changed title';
  }

  save(destination: Destination) {
    this.destinationService.addDestination(destination);
  }

  ngOnDestroy(): void {
    //
  }
}
