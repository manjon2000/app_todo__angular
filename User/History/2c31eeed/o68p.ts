import  { createAction, props } from '@ngrx/store';

import * filterActions from './filters.interface';

export const FilterAction = createAction(
    '[Todo] Filter',
    props<{filter: Filter}>()
);