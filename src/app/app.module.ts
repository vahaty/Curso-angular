import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { empleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import {CochesComponent} from './coches/coches.component';

@NgModule({
  imports: [BrowserModule, routing, FormsModule],
  declarations: [AppComponent, FrutaComponent, empleadoComponent, HomeComponent, CochesComponent],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders]
})
export class AppModule { }
