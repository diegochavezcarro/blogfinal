import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import {LoginService} from './service/login'
import {HeadersService} from './service/headers'
import {HomeComponent,LoginComponent,AddPostComponent} from './component'

import { AppComponent }         from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddPostComponent
  ],
  providers: [ LoginService, HeadersService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
