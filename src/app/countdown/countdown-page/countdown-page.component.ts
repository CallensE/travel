import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { RxPush } from '@rx-angular/template/push';

@Component({
  selector: 'app-countdown-page',
  standalone: true,
  imports: [RxPush],
  templateUrl: './countdown-page.component.html',
  styleUrl: './countdown-page.component.scss'
})
export class CountdownPageComponent{
  counter = signal(20);
  numberOfWeeks = computed(() => Math.floor(this.counter() / 7));
  myEffect = effect(() => {
    console.log('Number of weeks:', this.numberOfWeeks());
  });

  constructor() {
    this.counter.set(1000);
    this.counter.set(20);
    this.counter.set(300);
    
  }

  addDays(){
    this.counter.update((value) => value + 1);
  }

  subtractDays(){
    this.counter.update((value) => value - 1);
  }
}
