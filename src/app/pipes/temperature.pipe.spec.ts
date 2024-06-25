import { TemperaturePipe } from './temperature.pipe';

fdescribe('TemperaturePipe', () => {
  const pipe = new TemperaturePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should display temperature in °C when no scale is provided', () => {
      let result = pipe.transform(24);
      expect(result).toBe('24 °C');
    });

    it('should display temperature in °C when Celcius scale is provided', () => {
      let result = pipe.transform(24, 'Celsius');
      expect(result).toBe('24 °C');
    });

    it('should display temperature in °F when Fahrenheit scale is provided', () => {
      let result = pipe.transform(24, 'Fahrenheit');
      expect(result).toBe('24 °F');
    });
  })

});
