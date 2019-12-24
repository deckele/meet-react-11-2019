export interface Todo {
    description: string;
    done: boolean;
    id: number;
}

export interface AppState {
    todos: Todo[];
}