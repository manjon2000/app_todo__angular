/**
 * export interface AppState {
    todo: todoItemsInterface[];
}
  
export interface todoItemsInterface {
    uuid: string;
    name: string;
    isCompleted: boolean;
}

export type todoAddItemInterface = todoAddItemInterface[]; 

export interface removeTodoInterface {
    uuid: string;
}
 */

import { todoModel } from "../models/todo.model";

export interface AppState {
  todo: todoModel
}