import { Component, OnInit } from '@angular/core';
import { Filme } from './filme';
import { ImageFormaterPipe } from './image.pipe';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  providers: [
    ImageFormaterPipe
  ]
})
export class FilmesComponent implements OnInit {
  
  constructor(private imageFormat: ImageFormaterPipe) {}

  filmes: Filme[];
  mapped: Filme[];

  ngOnInit() {
      this.filmes = [
        {
        nome: 'Filme Teste 1',
        dataLancamento: new Date('01/01/1994'),
        valor: 150.00,
        imagem: 'Batman2008.jpg',
        tamanho: '111111111'
      },
      {
        nome: 'Filme Teste 2',
        dataLancamento: new Date('01/01/1994'),
        valor: 150.00,
        imagem: 'poderosoChefaoI.jpg',
        tamanho: '111111111'
      },
      {
        nome: 'Filme Teste 3',
        dataLancamento: new Date('01/01/1994'),
        valor: 150.00,
        imagem: 'poderosoChefaoII.jpg',
        tamanho: '111111111'
      },
      {
        nome: 'Filme Teste 4',
        dataLancamento: new Date('01/01/1994'),
        valor: 150.00,
        imagem: 'PulpFiction.jpg',
        tamanho: '111111111'
      },
      {
        nome: 'filme teste 5',
        dataLancamento: new Date('01/01/1994'),
        valor: 150.00,
        imagem: 'sonhoLiberdade.jpg',
        tamanho: '111111111'
      },
      {
        nome: 'Filme Teste 6',
        dataLancamento: new Date('01/01/1994'),
        valor: 150.00,
        imagem: '',
        tamanho: '111111111'
      },
    ];
    
    this.mapped = this.filmes.map(filme => {
      return {
        nome: filme.nome,
        dataLancamento: filme.dataLancamento,
        valor: filme.valor,
        tamanho: filme.tamanho,
        imagem: this.imageFormat.transform(filme.imagem, 'default', true)

      }
    })
  }
}
