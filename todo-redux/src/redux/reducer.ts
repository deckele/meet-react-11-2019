import { Reducer } from "redux";
import { AppState } from "../contracts";
import { todoConstants } from "./todo-constants";

const initialState: AppState = {
    todos: [
        {description: "task1", done: false, id: 1},
        {description: "task2", done: false, id: 2}
    ]
}

let count = 3;
function todoFactory(description: string) {
    return {description, done: false, id: count++}
}

export const rootReducer: Reducer<AppState> = (state = initialState, action) => {
    switch (action.type) {
        case todoConstants.ADD_TODO: 
            const description = action.payload;
            return {
                ...state,
                todos: [todoFactory(description), ...state.todos]
            }
        case todoConstants.REMOVE_TODO:
            const id = action.payload;
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== id)
            }
        default: 
            return state;
    }
} 