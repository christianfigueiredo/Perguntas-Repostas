import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, 
              private toastr: ToastrService, 
              private router: Router) {    
  
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  log() {
    console.log(this.login.value);
    const usuario: Usuario = {
      nome: this.login.value.usuario,
      senha: this.login.value.senha
    }
    this.loading = true;    
    setTimeout(() => {
      if(usuario.nome == 'admin' && usuario.senha == 'admin') {
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.error('Usuário ou senha inválidos', 'Login inválido');
        this.login.reset();
      }
      this.loading = false; 
    }, 3000)    
    }    
   }


