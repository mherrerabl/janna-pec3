import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { appReducers, EffectsArray } from './app.reducers';
import { MailModule } from './mail/mail.module';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './spinner/components/spinner/spinner.component';
import { UsersModule } from './users/users.module';

registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MailModule,
    UsersModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('AppModule loaded.');
  }
}
