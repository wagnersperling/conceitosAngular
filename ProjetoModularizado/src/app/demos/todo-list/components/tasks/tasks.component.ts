import { map } from 'rxjs/operators';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>;
  subscription: Subscription;

  constructor(private taskService: TasksService, private store: Store) { }
 
  ngOnInit() {
    //this.todolist$ = this.taskService.getTodoList$;
    this.todolist$ = this.store.getTodoList()
    .pipe(
      map(todolist =>  todolist.filter(task => !task.iniciado && !task.finalizado)));

      this.subscription = this.taskService.getTodoList$.subscribe();
  }

  onToggle(event){
    this.taskService.toggle(event);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
