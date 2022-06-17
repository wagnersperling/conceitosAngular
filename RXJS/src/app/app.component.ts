import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RXJS';

  mimhaPromisse(nome: string) : Promise<string>{
    return new Promise((resolve, reject) => {
      if(nome == 'Carlos'){
        setTimeout(() => {
          resolve('Seja bem vindo ' + nome);
        }, 1000);
      }else{
        reject('Ops! Você não é o Carlos');
      }
    })
  }

  mimhaObservable(nome: string) : Observable<string>{
    return new Observable(subscriber => {
      if(nome === 'Carlos'){
        subscriber.next('Olá! ' + nome);
        subscriber.next('Olá de novo! ' + nome);
        setTimeout(() => {
          subscriber.next('Resposta com delay ' + nome);
        }, 1000);
        subscriber.complete();
      }else{
        subscriber.error('Ops, Deu erro!');
      }     
    });
  }

  usuarioObservable(nome: string, email: string) : Observable<Usuario>{
    return new Observable(subscriber => {
      if(nome === 'Admin'){
        let usuario = new Usuario(nome, email);
        setTimeout(() => {
          subscriber.next(usuario);
        }, 1000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 2000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 3000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 4000);

        setTimeout(() => {
          subscriber.complete();
        }, 5000);
        
      }else{
        subscriber.error('Ops, Deu erro!');
      }     
    });
  }

  ngOnInit(): void {
    // this.mimhaPromisse('Carlos')
    // .then(result => console.log(result))

    // this.mimhaPromisse('José')
    // .then(result => console.log(result))
    // .catch(erro => console.log(erro))

    // this.mimhaObservable('Carlos')
    //   .subscribe(
    //     result => console.log(result),
    //     error => console.log(error),
    //     () => console.log('FIM!') );

    const observer = {
      next: (valor: any) => this.escrever(valor),
      error: (erro: any) => console.log('Erro', erro),
      complete: () => console.log('FIM!')
    }

    //   const obs = this.mimhaObservable('Carlos');
    //   obs.subscribe(observer);

     const obs = this.usuarioObservable('Admin', 'admin@admin.com');
     const subs = obs.subscribe(observer);

     setTimeout(() => {
      subs.unsubscribe();
      console.log('Conexão fechada: ' + subs.closed);
    }, 3500);
  }

  escrever(texto: string){
    console.log(texto);
  }
}

export class Usuario{

  constructor(nome: string, email: string){
    this.nome = nome;
    this.email = email
  }

  nome: string;
  email: string;
}
