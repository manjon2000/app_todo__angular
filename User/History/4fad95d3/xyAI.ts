import  { createAction, props } from '@ngrx/store';
import  {  } from '../types/todo.interface';

export const listTodo = createAction('[Todo] All');
export const addTodo = createAction(
    '[Todo] Add',
    props<{name: string}>()
);
export const isCompletedAction = createAction(
    '[Todo] changeValueComplete',
    props<id: string, isCompleted: boolean>()
);
export const removeTodo = createAction(
    '[Todo] Remove',
    props<{id: string }>()
);
