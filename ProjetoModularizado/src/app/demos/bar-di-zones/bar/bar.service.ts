import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'

@Injectable()
export class BarService{
    
    constructor(private http: HttpClient) {}

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