import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { empleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import {CochesComponent} from './coches/coches.component';
import {PlantillasComponent} from './plantillas/plantillas.component';

const appRouter: Routes = [
    // path vacio
    { path: '', component: HomeComponent },
    { path: 'empleado', component: empleadoComponent },
    { path: 'fruta', component: FrutaComponent },
    { path: 'fruta/:page', component: FrutaComponent },
    { path: 'home', component: HomeComponent },
    { path: 'coches', component: CochesComponent },
    { path: 'plantillas', component: PlantillasComponent},
    // error
    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);

