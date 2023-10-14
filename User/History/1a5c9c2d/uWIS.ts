import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Filter } from '../types/todo.interface';
import { todoModel } from '../models/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  filter!: Filter;
  todo!: todoModel[];

  constructor(private store: Store<AppState>) {
    this.store.select('filter').subscribe(filter => {
      this.filter = filter;
    });
    this.store.select('todo').subscribe(list => {
      this.todo = list;
    });
  }

  transform(value: unknown, ...args: unknown[]): unknown{

      console.log(value)

      return value
  }

}
