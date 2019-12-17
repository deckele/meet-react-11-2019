import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
function useLogger(who: string) {
  useEffect(() => {
    console.log(who + ": changes!")
  });
}
function useCounter(initialCount: number) {
  const [count, setCount] = useState(initialCount);
  function handleIncrement() {
    setCount(prev => prev + 1)
  }
  function handleDecrement() {
    setCount(prev => prev - 1)
  }
  return {
    count,
    increment: handleIncrement,
    decrement: handleDecrement
  }
}

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement }) => {
  useLogger("child");
  return (
    <div>
      <h1>count is :{count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}
function App() {
  const { count, increment, decrement } = useCounter(5);
  useLogger("root app");
  useEffect(() => {
    console.log("componentDidMount!");
  }, []);
  return (
    <div className="App">
      <Counter
        count={count}
        onIncrement={increment}
        onDecrement={decrement}></Counter>
      <Counter
        count={count}
        onIncrement={increment}
        onDecrement={decrement}></Counter>
      <Counter
        count={count}
        onIncrement={increment}
        onDecrement={decrement}></Counter>
    </div>
  );
}

export default App;
