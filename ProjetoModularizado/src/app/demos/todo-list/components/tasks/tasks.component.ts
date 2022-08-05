import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit {

  todolist$: Observable<any[]>;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.todolist$ = this.taskService.getTodoList$;
  }

}
