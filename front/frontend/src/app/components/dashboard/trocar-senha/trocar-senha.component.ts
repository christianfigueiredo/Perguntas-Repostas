import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trocar-senha',
  templateUrl: './trocar-senha.component.html',
  styleUrls: ['./trocar-senha.component.css']
})
export class TrocarSenhaComponent implements OnInit {

  trocarSenha!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.trocarSenha = this.fb.group({
      senhaAnterior: ['', Validators.required],
      novaSenha: ['', [Validators.required, Validators.minLength(6)]],
      confirmaNovaSenha: ['', Validators.required]
    } , { validator: this.checkSenha });
   }
  ngOnInit(): void { }

  checkSenha(group: FormGroup): any {
    const pass = group.controls['novaSenha'].value;
    const confirmPass = group.controls['confirmaNovaSenha'].value;
    return pass === confirmPass ? null : { notSame: true };        
  }

  trocar() {
    console.log(this.trocarSenha.value);
  }
}
