import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { CommonModule }           from '@angular/common';
import { FormsModule }            from '@angular/forms';
import { Router }                 from '@angular/router';
import { JsonpModule }            from '@angular/http';

import { AppComponent }           from './app.component';
import { AppRoutingModule }       from './app-routing.module';
import { PageNotFoundComponent }  from './not-found.component';
import { HomeModule }             from './home/home.module';
import { LoginModule }            from './login/login.module';
import { UserModule }             from './user/user.module';

@NgModule({
  imports: [ 
    BrowserModule,
    CommonModule,
    FormsModule,
    JsonpModule,
    HomeModule,
    LoginModule,
    UserModule,
    AppRoutingModule
   ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
