import { ActionReducerMap } from "@ngrx/store";
import { todoModel } from "./todo/models/todo.model";
import { Filter } from "./todo/types/todo.interface";
import { todoReducer } from "./todo/reducers/todo.reducers";
import { filterReducer } from "./filters/filters.reducers";

export interface AppState {
    todo: todoModel[],
    filter: Filter,
}

export const appReducers: ActionReducerMap<AppState> = {
    todo:   todoReducer,
    filter: filterReducer 
}