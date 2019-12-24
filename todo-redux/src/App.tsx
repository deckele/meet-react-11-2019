import React, { useState } from 'react';
import './app.scss';
import { TodosList } from './todos-list/todos-list';
import { useDispatch } from "react-redux";
import { addTodoAction } from './redux/todo-actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [ description, setDescription ] = useState("");
  function handleDescriptionChanged(e: React.ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }
  function handleAddTodo() {
    dispatch(addTodoAction(description));
  }

  return (
    <div className="app">
      <header>
        <h1 className="todos-title">Todo App!</h1>
      </header>
      <input 
        value={description} 
        onChange={handleDescriptionChanged} 
        type="text"
      />
      <button onClick={handleAddTodo}>Add todo</button>
      <TodosList></TodosList>
    </div>
  );
}

export default App;
