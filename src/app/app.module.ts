import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { Router }                 from '@angular/router';

import { AppComponent }           from './app.component';
import { AppRoutingModule }       from './app-routing.module';
import { PageNotFoundComponent }  from './not-found.component';
import { HomeModule }             from './home/home.module';

@NgModule({
  imports:      [ BrowserModule, HomeModule, AppRoutingModule ],
  declarations: [ AppComponent,PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
