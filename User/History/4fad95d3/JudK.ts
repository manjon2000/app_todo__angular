import  { createAction, props } from '@ngrx/store';
import  { Filter } from '../types/todo.interface';

export const addTodo = createAction(
    '[Todo] Add',
    props<{name: string}>()
);
export const isCompletedAction = createAction(
    '[Todo] changeValueComplete',
    props<{id: string; isCompleted: boolean;}>()
);

export const allTodoCompleted = createAction(
    '[Todo] allCompleted'
)

export const FilterAction = createAction(
    '[Todo] Filter',
    props<{filter: Filter}>()
);
export const removeTodo = createAction(
    '[Todo] Remove',
    props<{id: string }>()
);

export const removeComplet = createAction(
    '[Todo] removeComplet'
);
