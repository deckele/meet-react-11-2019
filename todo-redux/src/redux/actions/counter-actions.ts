import { counterConstants } from "../constants/counter-constants";

export const counterActions = {
    incrementAction,
    decrementAction,
    resetAction
}
function incrementAction() {
    return {
        type: counterConstants.INCREMENT_COUNT
    }
}
function decrementAction() {
    return {
        type: counterConstants.DECREMENT_COUNT
    }
}
function resetAction() {
    return {
        type: counterConstants.RESET_COUNT
    }
}