import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { register as registerSwiperElement } from 'swiper/element/bundle';
import { AppModule } from './app/app.module';

registerSwiperElement();
provideHttpClient(withFetch());
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
