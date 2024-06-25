import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'My travel app';
  imgLocation = '/images/travel.jpg';
  destinations = [
    {
      id: 0,
      country: 'Spain',
      city: 'Malaga',
      fromDate: new Date(2024, 8, 3),
      toDate: new Date(2024, 8, 5),
      averageTemperature: 25,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg'
    },
    {
      id: 1,
      country: 'Spain',
      city: 'Granada',
      fromDate: new Date(2024, 8, 5),
      toDate: new Date(2404, 8, 8),
      averageTemperature: 26,
      image: 'https://cdn.getyourguide.com/img/tour/4d9dcddd2b8d52f0.jpeg/70.jpg' 
    },
  ];

  changeTitle(): void {
    this.title = 'My travel app - changed title';
  }
}
