import { combineReducers } from "redux";
import { todoReducer } from "./todo-reducer";
import { counterReducer } from "./counter-reducer";
import { AppState } from "../../contracts";

export const rootReducer = combineReducers<AppState>({
    todosState: todoReducer,
    counterState: counterReducer
});