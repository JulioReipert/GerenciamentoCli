import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ClientesComponent
  }
];
