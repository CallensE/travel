import { Component, EventEmitter, Output } from '@angular/core';
import { Destination } from '../models/destination';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-destination-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './destination-form.component.html',
  styleUrl: './destination-form.component.scss'
})
export class DestinationFormComponent {

  @Output() add = new EventEmitter<Destination>();

  newDestination: Destination = {
    averageTemperature: 0,
    city: '',
    country: '',
    fromDate: new Date(),
    toDate: new Date(),
    id: 0,
    image: ''
  };

  save(destinationForm : NgForm) {
    this.add.emit(structuredClone(this.newDestination));
    destinationForm.reset();
  }
}
