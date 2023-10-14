import { Component, Input, OnInit } from '@angular/core';
import { todoModel } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { isCompletedAction } from '../actions/todo.actions';
import { AppState } from 'src/app/app.reducers';
import { removeTodo } from '../actions/todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: todoModel;

  inputCheckbox!: FormControl;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.inputCheckbox = new FormControl();
    this.inputCheckbox.setValue(this.todo.isCompleted);
    this.inputCheckbox.valueChanges.subscribe(e => {

       this.store.dispatch(isCompletedAction({
          id:this.todo.id, 
          isCompleted: e
       }));

    }); 
  }

  handleRemoveTodo(id: string) {
    this.store.dispatch(removeTodo({
      id
    }));
  }
}
