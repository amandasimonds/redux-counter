import { bindActionCreators } from "redux";

export const DECREMENT = "DECREMENT";
export const INCREMENT = "INCREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";


//our first action creator
export const increment = () => {
    //returns an action, action has to have a type!
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add = (value) => {
    return {
        type: ADD,
        val: value,
        name: "addCounter"
    };
};

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    };
};

export const storeResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    };
};

export const deleteResult = (resElId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resElId
    };
};