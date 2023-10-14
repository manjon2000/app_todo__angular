import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Filter } from '../types/todo.interface';
import { todoModel } from '../models/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: todoModel[], ...args: any): todoModel[] {

    if(args) {

      switch(args) {
        case 'ALL':
          return value;
      }
    }

      console.log(value)
      return value
  }

}
