import React from "react";
import { Todo, AppState } from "../contracts";
import { TodosListItem } from "./todos-list-item/todos-list-item";
import { useSelector } from "react-redux";
import "./todos-list.scss";

export const TodosList = () => {
    const todos = useSelector<AppState, Todo[]>(state => state.todosState.todos);
    return (
        <ul className="todos-list">
            {todos.map(todo => <TodosListItem key={todo.id} {...todo} />)}
        </ul>
    );
}