import { todoModel } from "./todo/models/todo.model";

export interface AppState {
    todo: todoModel[],
}