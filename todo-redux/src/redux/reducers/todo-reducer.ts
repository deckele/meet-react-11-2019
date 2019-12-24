import { Reducer } from "redux";
import { Todo } from "../../contracts";
import { todoConstants } from "../constants/todo-constants";

export interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: [
        {description: "task1", done: false, id: 1},
        {description: "task2", done: false, id: 2}
    ]
}

let count = 3;
function todoFactory(description: string) {
    return {description, done: false, id: count++}
}

export const todoReducer: Reducer<TodosState> = (state = initialState, action) => {
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