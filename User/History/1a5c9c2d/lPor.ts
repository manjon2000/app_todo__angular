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

  }

  transform(value: unknown, ...args: unknown[]): void{

  }

}
