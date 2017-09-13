import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MdCardModule,
  MdIconModule,
  MdButtonModule,
  MdRippleModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CatComponent } from './cat';
import { DocumentListComponent, DocumentItemComponent } from './documents';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DocumentListComponent,
    DocumentItemComponent
  ],
  imports: [
    BrowserModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdRippleModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
