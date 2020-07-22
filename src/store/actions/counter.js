import * as actionTypes from "./actionTypes"


//our first action creator
export const increment = () => {
    //returns an action, action has to have a type!
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value,
        name: "addCounter"
    };
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    };
};