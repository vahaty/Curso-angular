import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { empleadoComponent } from './empleado/empleado.component';
@NgModule({
  imports: [BrowserModule, routing],
  // imports: [BrowserModule],
  declarations: [AppComponent, FrutaComponent, empleadoComponent],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders]
})
export class AppModule { }
