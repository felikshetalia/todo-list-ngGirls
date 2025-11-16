import { Component, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterOutlet } from '@angular/router';
import { Taskbar } from './taskbar/taskbar';
import { TaskList } from './task-list/task-list';
import { TodoItem } from './shared/todo-item';
import { ToolbarHarnessFilters } from '@angular/material/toolbar/testing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatDividerModule, Taskbar, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('todo-list-ngGirls');
  todoList = signal<TodoItem[]>([
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ]);

  selectedTask = signal<TodoItem | undefined>(undefined);

  addItem(rep: TodoItem) {
    this.todoList.set([...this.todoList(), rep]);
  }

  removeItem(rep: TodoItem) {
    this.todoList.set(this.todoList().filter((tit) => tit.title !== rep.title));
  }
}
