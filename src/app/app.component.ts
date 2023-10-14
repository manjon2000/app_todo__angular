import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from './app.reducers';
import { FilterAction, addTodo, allTodoCompleted, removeComplet } from './todo/actions/todo.actions';
import { todoModel } from './todo/models/todo.model';
import { Filter } from './filters/filters.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'todo-app';
  data: todoModel[] = [];
  filters: Filter[] = [
    'ALL',
    'ACTIVE',
    'COMPLETED'
  ];
  filterSelect: Filter = 'ALL';

  nameTodo = new FormControl('', Validators.required); 

  allItemsCompleted: boolean = false;

  constructor(private store: Store<AppState>) {
    
    this.store.select('todo').subscribe(todos => {
      this.data = Array.from(todos);
    })

    this.store.select('filter').subscribe(filters => {
      this.filterSelect = filters;
    })
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  handleSubmitTodo(event: any) {

    event.preventDefault();

    if(this.nameTodo.invalid) {
      return;
    }

    const name = this.nameTodo.value?.toString()
    if(name && !this.nameTodo.invalid) {
      this.store.dispatch( addTodo( new todoModel(name)))
      this.allItemsCompleted = false;
    }
  }

  handleClickFilter(event: Filter): void {
    this.store.dispatch(FilterAction({
      filter: event
    }))
  }

  markAllCompleted(): void {
    this.store.dispatch(
      allTodoCompleted()
    );
    if(this.allItemsCompleted !== true) {
      this.allItemsCompleted = !this.allItemsCompleted; 
    }
  }
  clearComplet(): void {
    this.store.dispatch(
      removeComplet()
    )
  }
}
