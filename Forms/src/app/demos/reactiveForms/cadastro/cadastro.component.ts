import { ValidationMessages, GenericValidator, DisplayMessage } from './generic-form-validation';
import { Usuario } from './models/usuario';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr} from 'js-Brasil';
import { CustomValidators } from 'ng2-validation';
import { fromEvent, merge, Observable } from 'rxjs';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit, AfterViewInit {

@ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

cadastroForm: FormGroup;
usuario: Usuario;
formResult: string = '';
MASKS = utilsBr.MASKS;

validationMessages: ValidationMessages;
genericValidator: GenericValidator;
displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };
    this.genericValidator= new GenericValidator(this.validationMessages);
  }

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
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    });
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