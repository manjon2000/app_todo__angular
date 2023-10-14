import  { createAction, props } from '@ngrx/store';
import  { Filter } from '../types/todo.interface';

export const listTodo = createAction('[Todo] All');
export const addTodo = createAction(
    '[Todo] Add',
    props<{name: string}>()
);
export const isCompletedAction = createAction(
    '[Todo] changeValueComplete',
    props<{id: string; isCompleted: boolean;}>()
);

export const FilterAction = createAction(
    '[Todo] Filter',
    props<Filter>()
);
export const removeTodo = createAction(
    '[Todo] Remove',
    props<{id: string }>()
);
