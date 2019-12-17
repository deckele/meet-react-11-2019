import React from 'react';
import './app.scss';
import { TodosList } from './todos-list/todos-list';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1 className="todos-title">Todo App!</h1>
      </header>
      <TodosList></TodosList>
    </div>
  );
}

export default App;
