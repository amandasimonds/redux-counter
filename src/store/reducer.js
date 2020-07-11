const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENT"){
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === "ADD") {
        return {
            //the val is coming from the map action object we created in the counter component
            counter: state.counter + action.val
        }
    }
    if (action.type === "SUBTRACT") {
        return {
            counter: state.counter - action.val
        }
    }
    return state;
}

export default reducer