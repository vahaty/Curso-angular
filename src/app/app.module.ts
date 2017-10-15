import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { empleadoComponent } from './empleado/empleado.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent, FrutaComponent, empleadoComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders]
})
export class AppModule { }
