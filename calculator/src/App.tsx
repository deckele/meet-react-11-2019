import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Calculator } from './components/calculator/calculator';

const App: React.FC = () => {
  return (
    <div className="App">
      <Calculator></Calculator>
    </div>
  );
}

export default App;
