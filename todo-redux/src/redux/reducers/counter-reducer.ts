import { Reducer } from "redux";
import { counterConstants } from "../constants/counter-constants";

export interface CounterState {
    count: number;
}
const initialState: CounterState = {
    count: 0
}
export const counterReducer: Reducer<CounterState> = (state = initialState, action) => {
    switch(action.type) {
        case counterConstants.INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case counterConstants.DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case counterConstants.RESET_COUNT:
            return {
                ...state,
                count: 0
            }
        default:
            return state;
    }
}