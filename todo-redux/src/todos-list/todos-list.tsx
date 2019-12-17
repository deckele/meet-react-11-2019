import React from "react";
import { Todo } from "../contracts";
import { TodosListItem } from "./todos-list-item/todos-list-item";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import "./todos-list.scss";

export const TodosList = () => {
    const todos = useSelector<AppState, Todo[]>(state => state.todos);
    return (
        <ul className="todos-list">
            {todos.map(todo => <TodosListItem {...todo} />)}
        </ul>
    );
}