import { createStore, Reducer } from "redux";
import { Todo } from "../contracts";

export interface AppState {
    todos: Todo[]
}
const initialState: AppState = {
    todos: [
        {description: "task1", done: false},
        {description: "task2", done: false}
    ]
}

const rootReducer: Reducer<AppState> = (state = initialState, action: any) => {
    return state
} 

export const store = createStore(rootReducer);