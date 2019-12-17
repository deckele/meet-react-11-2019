import React, { FC } from "react";
import { Todo } from "../../contracts";
import "./todos-list-item.scss";

interface TodosListItemProps extends Todo {
    
}

export const TodosListItem: FC<TodosListItemProps> = ({ description, done }) => {
    return (
        <li>
            <input checked={done} type="checkbox"/>
            <span>{description}</span>
        </li>
    );
}