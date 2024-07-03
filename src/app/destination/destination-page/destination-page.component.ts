import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination.service';
import { Destination } from '../../models/destination';
import { Observable } from 'rxjs';
import { DestinationFormComponent } from '../destination-form/destination-form.component';
import { DestinationListComponent } from '../destination-list/destination-list.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-destination-page',
  standalone: true,
  imports: [DestinationFormComponent, DestinationListComponent, AsyncPipe],
  templateUrl: './destination-page.component.html',
  styleUrl: './destination-page.component.scss',
})
export class DestinationPageComponent implements OnInit{
  // destinations! : Destination[];
  destinations$!: Observable<Destination[]>;

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.updateDestinations();
  }

  updateDestinations() {
    this.destinations$ = this.destinationService.getAllDestinations();

    // this.destinationService.getAllDestinations().subscribe((allDestinations: Destination[]) => {
    //   this.destinations = allDestinations;
    // });
  }

  save(destination: Destination) {
    this.destinationService.addDestination(destination).subscribe((x) => {
      this.updateDestinations();
    });
  }

  deleteDestination(id: number) {
    this.destinationService.deleteDestination(id).subscribe((x) => {
      this.updateDestinations();
    });
  }

  ngOnDestroy(): void {
    //
  }
}
