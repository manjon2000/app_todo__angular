import { todoModel } from "./todo/models/todo.model";
import { Filter } from "./todo/types/todo.interface";

export interface AppState {
    todo: todoModel[],
    filter: Filter
}