import { Action, createReducer, on, props } from '@ngrx/store';
import * as action from '../actions/todo.actions'
import { todoModel } from '../models/todo.model';

export const initialState: todoModel[] = [
  new todoModel('Hello State to angular'),
  new todoModel('My name is Albert'),
  new todoModel('UI DEVELOPER')
];

export const _todoReducer = createReducer(initialState,
    on(action.listTodo,     (state) => initialState),
    on(action.addTodo,      (state, {name}) => [...state, new todoModel(name)]),
    on(action.isCompletedAction, (state, {id, isCompleted}) => {
      const todoUpdate = state.map(todo => {
        if(todo.id === id) {
          return {...todo, isCompleted};
        }else {
          return todo;
        }
      });

      return todoUpdate;
    }),
    on(action.FilterAction, (state, {filter}) => {
      
      switch(filter) {
        case 'ACTIVE':
          return state.filter(item => item.isCompleted === false)
        case 'COMPLETED':
          return state.filter(item => item.isCompleted === true)
        default:
          return state
      }

    }),
);

export function todoReducer(state: todoModel[] = initialState, action: Action ){
    return _todoReducer(state, action);
}