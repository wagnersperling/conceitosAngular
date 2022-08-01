import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { Inject, Injectable, Injector } from "@angular/core";
import {HttpClient} from '@angular/common/http'

// export function BarFactory(http: HttpClient, config: BarUnidadeConfig) {
//     return new BarService(http, config);
// }

export function BarFactory(http: HttpClient, injector: Injector) {
    return new BarService(http, injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable()
export class BarService{
    
    constructor(
        private http: HttpClient,
        @Inject(BAR_UNIDADE_CONFIG) private config: BarUnidadeConfig
        ) {}

    public obterUnidade(): string {
        return 'Unidade ID' + this.config.unidadeId + ' Token: ' + this.config.unidadeToken;
    }

    obterBebidas(): string {
        return 'Bebidas';
    }

    obterPorcoes(): string {
        return 'Porções';
    }

    obterRefeicoes(): string{
        return 'Refeições';
    }
}

export class BarServiceMock{   

    obterBebidas(): string {
        return 'Bebidas 1 Mock';
    }

    obterPorcoes(): string {
        return 'Porções 1 Mock';
    }

    obterRefeicoes(): string{
        return 'Refeições 1 Mock';
    }
}

export abstract class BebidaService{
    obterBebidas: () => string
}