import { TodosState } from "./redux/reducers/todo-reducer";
import { CounterState } from "./redux/reducers/counter-reducer";

export interface Todo {
    description: string;
    done: boolean;
    id: number;
}

export interface AppState {
    todosState: TodosState;
    counterState: CounterState;
}