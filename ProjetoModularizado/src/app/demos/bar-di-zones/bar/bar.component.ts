import { BarService, BarServiceMock } from './bar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: [],
  providers: [
    { provide: BarService, useClass: BarServiceMock }
  ]
})
export class BarComponent implements OnInit {

  barBebida1: string;

  constructor(private barService: BarService) { }

  ngOnInit() {
    this.barBebida1 = this.barService.obterBebidas();
  }

}
