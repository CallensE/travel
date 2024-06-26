import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationListComponent } from './destination-list.component';

describe('DestinationListComponent', () => {
  let component: DestinationListComponent;
  let fixture: ComponentFixture<DestinationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should render 2 cards when the component has 2 destinations', async () => {
    component.destinations = [
      {
        id: 0,
        country: 'Spain',
        city: 'Malaga',
        fromDate: new Date(2024, 8, 3),
        toDate: new Date(2024, 8, 5),
        averageTemperature: 25,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/4/40/M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg',
      },
      {
        id: 1,
        country: 'Spain',
        city: 'Granada',
        fromDate: new Date(2024, 8, 5),
        toDate: new Date(2024, 8, 8),
        averageTemperature: 26,
        image:
          'https://cdn.getyourguide.com/img/tour/4d9dcddd2b8d52f0.jpeg/70.jpg',
      },
    ];

    fixture.detectChanges();
    await fixture.whenStable();

    const element: HTMLElement = fixture.nativeElement;
    const cards = element.querySelectorAll('.card');

    expect(cards.length).toBe(component.destinations.length);
  });
});
