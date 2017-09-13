import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {
  MdCardModule,
  MdIconModule,
  MdButtonModule,
  MdRippleModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CatComponent } from './cat';
import {
  DocumentListComponent,
  DocumentItemComponent,
  DocumentsService } from './documents';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DocumentListComponent,
    DocumentItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdRippleModule
  ],
  exports: [],
  providers: [DocumentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
