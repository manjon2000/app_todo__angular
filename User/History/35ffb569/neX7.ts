import { Action, createReducer, on, props } from '@ngrx/store';
import * as action from './filters.actions';
import { Filter } from './filters.interface';

const initialState: Filter = 'ALL';

export const _filterReducer = createReducer(initialState,
  on(action.FilterAction, (state, { filter }) => filter),
);

export function filterReducer(state: Filter = 'ALL', action: Action ){
  return _filterReducer(state, action);
}