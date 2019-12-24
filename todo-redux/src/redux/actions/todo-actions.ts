import { todoConstants } from "../constants/todo-constants";

export function addTodoAction(description: string) {
    return {
        type: todoConstants.ADD_TODO,
        payload: description
    }
}
export function removeTodoAction(id: number) {
    return {
        type: todoConstants.REMOVE_TODO,
        payload: id
    }
}