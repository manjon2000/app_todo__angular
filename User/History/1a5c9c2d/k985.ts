import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private store: Store<AppState>) {

  }

  transform(value: unknown, ...args: unknown[]): void{

  }

}
