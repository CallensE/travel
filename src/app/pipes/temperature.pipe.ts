import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(temperature: number, scale: 'Celsius' | 'Fahrenheit' = 'Celsius'): string {
    if (scale === 'Fahrenheit') {
      return `${temperature} °F`;
    } else {
      return `${temperature} °C`;
    }
  }
}
