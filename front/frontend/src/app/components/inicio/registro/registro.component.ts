import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registro = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      repeteSenha: ['']
    }, { validator: this.checkSenha });
   }


  ngOnInit(): void { }

  registrar() {
    console.log(this.registro.value); 
    const usuario: Usuario = {      
      nome: this.registro.value.usuario,
      senha: this.registro.value.senha
    }    
    }

  checkSenha(group: FormGroup): any {
    const pass = group.controls['senha'].value;
    const confirmPass = group.controls['repeteSenha'].value;
    return pass === confirmPass ? null : { notSame: true };        
  }
  
}
