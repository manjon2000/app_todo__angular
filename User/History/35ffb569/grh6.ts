import { Action, createReducer, on, props } from '@ngrx/store';
import * as action from './filters.actions';


export const _filterReducer = createReducer('',
  on(action.FilterAction, (state, { filters }) => {
    switch (filters) {
      case 'ACTIVE':
        return state.filter(item => item.isCompleted === false)
      case 'COMPLETED':
        return state.filter(item => item.isCompleted === true)
      default:
        return state
    }}
  ),
);

export function filterReducer(state: todoModel[] = initialState, action: Action ){
  return _filterReducer(state, action);
}