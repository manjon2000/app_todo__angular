import { ActionReducerMap } from "@ngrx/store";
import { todoModel } from "./todo/models/todo.model";
import { Filter } from "./todo/types/todo.interface";

export interface AppState {
    todo: todoModel[],
    filter: Filter
}

export const appReducers: ActionReducerMap<AppState> = {
    todo: todo
}