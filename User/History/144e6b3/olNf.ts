import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from './app.reducers';
import { FilterAction, addTodo } from './todo/actions/todo.actions';
import { todoModel } from './todo/models/todo.model';
import { Filter } from './filters/filters.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = '04.todo-app';
  loading: boolean = true;
  data: todoModel[] = [];
  filters: Filter[] = [
    'ALL',
    'ACTIVE',
    'COMPLETED'
  ] 
  filterSelect: Filter | any = 'ALL';

  nameTodo = new FormControl('', Validators.required); 

  constructor(private store: Store<AppState>) {
    
    this.store.select('todo').subscribe(e => {
      console.log(e)
      this.data = e;
      this.loading = false
    })

    this.store.select('filter').subscribe(e => {
      console.log(e)
      this.filterSelect = e;
    })
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  handleSubmitTodo(event: any) {

    event.preventDefault();

    const name = this.nameTodo.value?.toString()

    if(name && !this.nameTodo.invalid) 
      this.store.dispatch( addTodo( new todoModel(name)))

    if(this.nameTodo.invalid) 
      return;

  }

  handleClickFIlter(event: HTMLElement | any) {

    if(event.explicitOriginalTarget.attributes['data-option']) {


      const filter: 'ALL' | 'ACTIVE' | 'COMPLETED' = event.explicitOriginalTarget.attributes['data-option'].value;


      /**
       * 
       * 
       */

      if(filter === 'ACTIVE') {
       console.log('aaaaa')
       this.store.dispatch(FilterAction({
        filter: 'ACTIVE'
      }))
      }

     /**
      * 
      *  this.store.dispatch(FilterAction({
        filter: 'ACTIVE'
      }))
      const filter: 'ALL' | 'ACTIVE' | 'COMPLETED' = event.explicitOriginalTarget.attributes['data-option'].value;

      if(!filter) return;

      if(filter === 'ALL') {
        this.store.dispatch(FilterAction({
          filter: null
        }))
      }

      if(filter === 'ACTIVE') {
        this.store.dispatch(FilterAction({
          filter: 'ACTIVE'
        }))
      }

      if(filter === 'COMPLETED') {
        this.store.dispatch(FilterAction({
          filter: 'COMPLETED'
        }))
      }
      */

    }
  }
}
