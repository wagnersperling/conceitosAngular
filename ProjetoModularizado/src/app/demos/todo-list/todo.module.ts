import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo.component";
import { ToDoListaComponent } from './components/todo-list/todo-list.component';
import { TasksComponent } from "./components/tasks/tasks.component";
import { TasksService } from "./todo.service";
import { TasksFinalizadasComponent } from "./components/tasks-finalizadas/tasks-finalizadas.component";
import { TasksIniciadasComponent } from "./components/tasks-iniciadas/tasks-iniciadas.component";
import { Store } from "./todo.store";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers:[
        TasksService,
        Store
    ],
    declarations: [
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        ToDoListaComponent,
        TasksComponent
    ],
    exports: [
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        ToDoListaComponent,
        TasksComponent
    ]
})
export class TodoModule {}