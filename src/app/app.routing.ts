import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {empleadoComponent} from './empleado/empleado.component';
import {FrutaComponent}  from './fruta/fruta.component';

const appRouter: Routes = [
    {path: '', component: empleadoComponent},
    {path: 'empleado', component: empleadoComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: '**', component: empleadoComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);

