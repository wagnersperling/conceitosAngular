import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProdutoRoutingModule } from './produto.route';

@NgModule({
declarations: [
    ProdutoDashboardComponent
],
imports: [
    CommonModule,
    ProdutoRoutingModule
],
exports: []
})
export class ProdutoModule{}