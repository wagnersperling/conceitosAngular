import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarService, BarServiceMock } from './bar.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: [],
  providers: [
    { provide: BarService, useClass: BarServiceMock }
  ]
})
export class BarComponent implements OnInit {

  configManual: BarUnidadeConfig;
  config: BarUnidadeConfig;
  barBebida1: string;

  constructor(
    private barService: BarService,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig
    ) { }

  ngOnInit() {
    this.barBebida1 = this.barService.obterBebidas();
    this.configManual = this.ApiConfigManual;
    this.config = this.ApiConfigManual;
  }

}
