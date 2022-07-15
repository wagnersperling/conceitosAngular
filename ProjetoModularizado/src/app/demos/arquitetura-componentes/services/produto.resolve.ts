import { ProdutoService } from './produto.service';
import { Produto } from './../models/produto';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve} from "@angular/router";

@Injectable()
export class ProdutosResolve  implements Resolve<Produto[]>{

    constructor(private produtoService: ProdutoService){}

    resolve(route: ActivatedRouteSnapshot){
        return this.produtoService.obterTodos(route.params.estado);
    }

}