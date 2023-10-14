import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Filter } from '../types/todo.interface';
import { todoModel } from '../models/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: todoModel[], ...args: Filter): todoModel[] {

    switch(args) {
      case 'ACTIVE':
        return value.filter(todo => todo.isCompleted !== true)
      case 'COMPLETED':
        return value.filter(todo => todo.isCompleted !== false)

      default: 
        return value;
    }
  }

}
