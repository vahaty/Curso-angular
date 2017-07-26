import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, FrutaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
