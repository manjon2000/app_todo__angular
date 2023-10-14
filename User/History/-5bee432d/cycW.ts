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
    on(action.isCompletedAction, (state, {id, isCompleted}) => 
      state.map(todo => {
        if(todo.id === id) {
          return {...todo, isCompleted};
        }else {
          return todo;
        }
      })
    ),
    on(action.removeComplet, (state => state.filter(e => e.isCompleted != true)))
);

export function todoReducer(state: todoModel[] = initialState, action: Action ){
    return _todoReducer(state, action);
}