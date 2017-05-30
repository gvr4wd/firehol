import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {PrettyJsonModule} from 'angular2-prettyjson';


import { AppComponent } from './app.component';
import {FireholService} from "./firehol.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    PrettyJsonModule,
  ],
  providers: [FireholService],
  bootstrap: [AppComponent]
})
export class AppModule { }
