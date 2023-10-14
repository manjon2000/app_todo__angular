import { Pipe, PipeTransform } from '@angular/core';
import { Filter } from '../types/todo.interface';
import { todoModel } from '../models/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: todoModel[], args: Filter): todoModel[] {

    switch(args) {
      case 'ACTIVE':
        return value.filter(todo => !todo.isCompleted);
      case 'COMPLETED':
        return value.filter(todo => todo.isCompleted);

      default: 
        return value;
    }
  }

}
