import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { register as registerSwiperElement } from 'swiper/element/bundle';
import { AppModule } from './app/app.module';

registerSwiperElement();
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
