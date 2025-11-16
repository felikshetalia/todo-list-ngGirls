import { Component, inject, output } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ButtonComponent } from '../shared/button/button';
import { TodoItem } from '../shared/todo-item';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-taskbar',
  imports: [MatLabel, MatFormField, MatInput, ButtonComponent],
  templateUrl: './taskbar.html',
  styleUrl: './taskbar.scss',
})
export class Taskbar {
  // the button here has to add new items

  private _fb = inject(FormBuilder);
  addItemExecuted = output<TodoItem>();

  form = this._fb.group({
    title: ['', [Validators.required]],
  });
  buttonExecuted(rep: string) {
    if (rep === 'save') {
      // assuming it's 'add'
      const enteredData = { title: this.form.value.title || '', completed: false };
      console.log('Emitted item: ' + enteredData);
      this.addItemExecuted.emit(enteredData);
    }
  }
}
