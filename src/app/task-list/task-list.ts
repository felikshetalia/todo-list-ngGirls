import { Component, input } from '@angular/core';
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
}
