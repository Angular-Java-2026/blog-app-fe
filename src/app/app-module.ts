import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeuix/themes/aura';
import { environment } from './environment/environment';
import { BlogModule } from './blog/blog-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, BlogModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
      license: environment.primeUILicense,
    }),
  ],
  bootstrap: [App],
})
export class AppModule {}
