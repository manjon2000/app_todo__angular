import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Filter } from '../types/todo.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  filter!: Filter;

  constructor(private store: Store<AppState>) {

  }

  transform(value: unknown, ...args: unknown[]): void{

  }

}
