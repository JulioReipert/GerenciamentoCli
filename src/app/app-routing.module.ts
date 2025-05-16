import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ClientesListComponent } from './pages/clientes-list/clientes-list.component';
import { ClientesFormComponent } from './pages/clientes-form/clientes-form.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClientesListComponent },
  { path: 'clientes/novo', component: ClientesFormComponent },
  { path: 'clientes/:id', component: ClientesFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
