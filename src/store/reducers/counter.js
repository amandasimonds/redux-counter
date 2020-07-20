import * as actionTypes from "../actions/actions"

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT :
                //copy the old state object in an unmutable way
                const newState = Object.assign({}, state);
                newState.counter = state.counter + 1;
                return newState;
        case actionTypes.DECREMENT :
            return {
                //this is another way of doing it unmutably
                //return a javascript object, distribute the properties and values in this new object, then add this new property to the object
                //or if its already present, overwrite the property
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD :
            return {
                ...state,
                //the val is coming from the map action object we created in the counter component
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT :
            return {
                ...state,
                counter: state.counter - action.val
            }
        default:
            //this returns the current state! not the updated
            return state;
    }
}

export default reducer