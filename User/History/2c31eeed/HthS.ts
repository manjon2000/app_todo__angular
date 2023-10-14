import  { createAction, props } from '@ngrx/store';

import {Filter} from './filters.interface';

export const FilterAction = createAction(
    '[Todo] Filter',
    props<{filters: Filter}>()
);