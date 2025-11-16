import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ButtonComponent } from '../shared/button/button';

@Component({
  selector: 'app-taskbar',
  imports: [MatLabel, MatFormField, MatInput, ButtonComponent],
  templateUrl: './taskbar.html',
  styleUrl: './taskbar.scss',
})
export class Taskbar {}
