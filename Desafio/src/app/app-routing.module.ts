import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'formulario', component: FormularioComponent },
  // Outras rotas, se necessário
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
