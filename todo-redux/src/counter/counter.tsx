import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../contracts";
import { counterActions } from "../redux/actions/counter-actions";

export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector<AppState, number>(state => state.counterState.count);
    
    function handleIncrement() {
        dispatch(counterActions.incrementAction());
    }
    function handleDecrement() {
        dispatch(counterActions.decrementAction());
    }
    function handleReset() {
        dispatch(counterActions.resetAction());
    }
    return (
        <div className="counter-wrapper">
            <div>count is: {count}</div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}