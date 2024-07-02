import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { Destination } from '../models/destination';

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [UpperCasePipe, TemperaturePipe, DatePipe],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.scss'
})
export class DestinationListComponent {
  @Input() destinations?: Destination[];
  @Output() delete = new EventEmitter<number>();

  deleteDestinations(id: number) {
    this.delete.emit(id);
  }
}
