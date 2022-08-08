import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html'
})
export class TasksFinalizadasComponent implements OnInit {

  finalizados$: Observable<any[]>;

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnInit() {
    //this.finalizados$ = this.taskService.getTodoList$;
    this.finalizados$ = this.store.getTodoList()
    .pipe(
      map(todolist => todolist.filter(task => task.finalizado)));
  }
}