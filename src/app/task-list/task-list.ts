import { Component, input, output } from '@angular/core';
import { MatListItem } from '@angular/material/list';
import { ButtonComponent } from '../shared/button/button';
import { TodoItem } from '../shared/todo-item';

@Component({
  selector: 'app-task-list',
  imports: [MatListItem, ButtonComponent],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  readonly taskList = input<TodoItem[]>();
  selectedTask = output<TodoItem>();
  removeExecuted = output<TodoItem>();
  taskSelected(task: TodoItem) {
    console.log('task selected');
    this.selectedTask.emit(task);
  }
  buttonExecuted(rep: TodoItem, mode: string) {
    if (mode === 'remove') this.removeExecuted.emit(rep);
    else console.log('saved');
  }
}
