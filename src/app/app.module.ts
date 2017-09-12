import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
