import { Action, createReducer, on, props } from '@ngrx/store';
import * as action from './filters.actions';
import { Filter } from './filters.interface';

const initialState: Filter = 'ALL';

export const _filterReducer = createReducer(initialState,
  on(action.FilterAction, (state, { filters }) => {
    switch (filters) {
      case 'ACTIVE':
        //return state.filter(item => item.isCompleted === false)
      case 'COMPLETED':
        //return state.filter(item: any => item.isCompleted === true)
      default:
        return state
    }}
  ),
);

export function filterReducer(state: Filter, action: Action ){
  return _filterReducer(state, action);
}