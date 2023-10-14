import  { createAction, props } from '@ngrx/store';


export const FilterAction = createAction(
    '[Todo] Filter',
    props<{filter: Filter}>()
);