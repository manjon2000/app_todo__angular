import { Component, Input, OnInit } from '@angular/core';
import { todoModel } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: todoModel;

  inputCheckbox!: FormControl;

  constructor(private store: Store<any>){}

  ngOnInit(): void {
    this.inputCheckbox = new FormControl();
    this.inputCheckbox.setValue(this.todo.isCompleted);
    this.inputCheckbox.valueChanges.subscribe(e => {

      console.log('Identificador', this.todo.id)
      console.log('Esta completada', e)
       //this.store.dispatch();
    }); 
  }
}
