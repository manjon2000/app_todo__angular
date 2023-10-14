import { Action, createReducer, on, props } from '@ngrx/store';

export const _filterReducer = createReducer('', on(action.FilterAction, (state, {filter}) => {
      
  switch(filter) {
    case 'ACTIVE':
      return state.filter(item => item.isCompleted === false)
    case 'COMPLETED':
      return state.filter(item => item.isCompleted === true)
    default:
      return state
  }

}),);
/**
 * 
 * 
 * on(action.FilterAction, (state, {filter}) => {
      
    switch(filter) {
      case 'ACTIVE':
        return state.filter(item => item.isCompleted === false)
      case 'COMPLETED':
        return state.filter(item => item.isCompleted === true)
      default:
        return state
    }

  }),
 */