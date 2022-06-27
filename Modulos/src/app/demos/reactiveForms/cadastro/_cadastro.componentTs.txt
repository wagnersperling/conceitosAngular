import { Usuario } from './models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr} from 'js-Brasil';
import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

cadastroForm: FormGroup;
usuario: Usuario;
formResult: string = '';
MASKS = utilsBr.MASKS;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

      let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15])]);
      let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)]);

      this.cadastroForm = this.fb.group({
        nome: ['', [Validators.required, Validators.minLength(2), Validators.max(150)]],
        cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
        email: ['', [Validators.required, Validators.email]],
        senha: senha,//['', CustomValidators.rangeLength([6,15])],
        senhaConfirmacao: senhaConfirm //['']
      });

    
      // this.cadastroForm = this.fb.group({
      //   nome: ['', Validators.required],
      //   cpf: ['99999999999'],
      //   email: ['', [Validators.required, Validators.email]],
      //   senha: [''],
      //   senhaConfirmacao: ['']
      // });

      // this.cadastroForm = new FormGroup({
      //   nome: new FormControl(''),
      //   cpf: new FormControl(''),
      //   email: new FormControl(''),
      //   senha: new FormControl(''),
      //   senhaConfirmacao: new FormControl('')
      // });
  }

  adicionarUsuario(){
    //let x = this.cadastroForm.value;
    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);   
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }else{
      this.formResult= "Não submeteu!!!";
    }    
  }

}
//npm i ng-brazil@2.0.9 --force
//npm install --save ng-brazil angular2-text-mask --force
//npm i ng2-validation@4.2.0 --force