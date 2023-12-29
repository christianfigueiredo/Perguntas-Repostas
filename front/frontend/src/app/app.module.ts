import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BemvindoComponent } from './components/inicio/bemvindo/bemvindo.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegistroComponent } from './components/inicio/registro/registro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrocarSenhaComponent } from './components/dashboard/trocar-senha/trocar-senha.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { QuestionariosComponent } from './components/dashboard/questionarios/questionarios.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BemvindoComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,    
    TrocarSenhaComponent,
    NavbarComponent,
    QuestionariosComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
