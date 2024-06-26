import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/nl-BE';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(locale);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'nl-BE'},
    provideHttpClient()
  ],
};
