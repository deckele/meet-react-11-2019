import React, { FC } from "react";
import { Todo } from "../../contracts";
import "./todos-list-item.scss";
import { useDispatch } from "react-redux";
import { removeTodoAction } from "../../redux/todo-actions";

interface TodosListItemProps extends Todo {
    
}

export const TodosListItem: FC<TodosListItemProps> = ({ id, description, done }) => {
    const dispatch = useDispatch();

    function handleRemoveTodo() {
        dispatch(removeTodoAction(id));
    }
    return (
        <li>
            <input checked={done} type="checkbox"/>
            <span>{description}</span>
            <button onClick={handleRemoveTodo}>X</button>
        </li>
    );
}