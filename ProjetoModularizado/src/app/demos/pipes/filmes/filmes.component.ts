import { Component, OnInit } from '@angular/core';
import { Filme } from './filme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styles: []
})
export class FilmesComponent implements OnInit {

  filmes: Filme[];

  ngOnInit() {
    this.filmes = [
      {
      nome: 'Filme Teste 1',
      dataLancamento: new Date('01/01/1994'),
      valor: 150.00,
      imagem: 'imagem1.jpg',
      tamanho: '111111111'
    },
    {
      nome: 'Filme Teste 2',
      dataLancamento: new Date('01/01/1994'),
      valor: 150.00,
      imagem: 'imagem2.jpg',
      tamanho: '111111111'
    },
    {
      nome: 'Filme Teste 3',
      dataLancamento: new Date('01/01/1994'),
      valor: 150.00,
      imagem: 'imagem3.jpg',
      tamanho: '111111111'
    },
    {
      nome: 'Filme Teste 4',
      dataLancamento: new Date('01/01/1994'),
      valor: 150.00,
      imagem: 'imagem4.jpg',
      tamanho: '111111111'
    },
    {
      nome: 'filme teste 5',
      dataLancamento: new Date('01/01/1994'),
      valor: 150.00,
      imagem: 'imagem5.jpg',
      tamanho: '111111111'
    },
    {
      nome: 'Filme Teste 6',
      dataLancamento: new Date('01/01/1994'),
      valor: 150.00,
      imagem: 'imagem6.jpg',
      tamanho: '111111111'
    },
  ];
  }
}
