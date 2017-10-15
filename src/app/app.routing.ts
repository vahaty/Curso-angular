import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { empleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';

const appRouter: Routes = [
    // path vacio
    { path: '', component: HomeComponent },
    { path: 'empleado', component: empleadoComponent },
    { path: 'fruta', component: FrutaComponent },
    { path: 'home', component: HomeComponent },
    // error
    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);

