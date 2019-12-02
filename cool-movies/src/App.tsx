import React from 'react';
import './App.css';
import { MoviesList } from './components/movies-list/movies-list';

const App: React.FC = () => {
  return (
    <div className="App">
      <MoviesList></MoviesList>
    </div>
  );
}

export default App;
