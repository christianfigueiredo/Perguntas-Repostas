import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemvindoComponent } from './components/inicio/bemvindo/bemvindo.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegistroComponent } from './components/inicio/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionariosComponent } from './components/dashboard/questionarios/questionarios.component';
import { TrocarSenhaComponent } from './components/dashboard/trocar-senha/trocar-senha.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent, children: [
    {path: '', component: BemvindoComponent},
    {path: 'login', component: LoginComponent},
    {path:'registro', component: RegistroComponent}  
  ]},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: QuestionariosComponent},
    {path: 'trocar-senha', component: TrocarSenhaComponent},
    {path: 'navbar', component: NavbarComponent},
  ]},  
  {path: '**', redirectTo: '/bemvindo', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
