import { Component, Input, OnInit } from '@angular/core';
import { todoModel } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: todoModel;

  inputCheckbox = new FormControl('');

  

  ngOnInit(): void {
    
  }

  onChangeIsCompleted(event: Event) {
      console.log(event)
  }


}
