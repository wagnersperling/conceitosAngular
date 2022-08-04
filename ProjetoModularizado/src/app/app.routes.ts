import { TodoComponent } from './demos/todo-list/todo.component';
import { BarComponent } from './demos/bar-di-zones/bar/bar.component';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { AuthGuard } from './services/app.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { CadastroGuard } from './services/cadastro.guard';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},    
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
    { path: 'produtos', 
            loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
            .then(m => m.ProdutoModule)},
    { path: 'filmes', component: FilmesComponent },
    { path: 'admin', 
            loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule),
            canLoad: [AuthGuard], canActivate: [AuthGuard]},
    { path: 'bar', component: BarComponent },
    { path: 'todo', component: TodoComponent },
            
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig, {enableTracing: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}