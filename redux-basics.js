const redux = require('redux');

//creates a new redux store
const createStore = redux.createStore;

const intialState = {
    counter: 0
}

//REDUCER
//create the reducer
//1st argument - state, 2nd argument - action
//returns one thing - the state
//you can set a default value for the state first
const rootReducer = (state = intialState, action) => {
    if (action.type === 'INC_COUNTER'){
        return {
            //remember to make this inmutaable - doesn't mutate the original state
            //make a copy of the state so we do not mutate the original state
            ...state,
            //overwrite the one property you want to adjust
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER'){
        return {
            ...state,
            //overwrite the one property you want to adjust
            counter: state.counter + action.value
        };
    }
    return state;
};

//STORE
//this needs to be initialized with a reducer
const store = createStore(rootReducer);
//the function "getState" will pull out the state from the store
console.log(store.getState())

//SUBSCRIPTION
//make sure you don't have to get a new state, unless something changes
//1 argument, a function that will run whenever state is updated, whenever action reaches reducer
//triggered whenever an action is dispatched
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
});

//DISPATCHING ACTION
//access the store constant, then call the dispatch function
//dispatch takes an argument - object with type property
//important building block in getting info - which type of action was dispatched, and what we should do in the reducer
//basically defining the actions
//use whatever action type you want, but it should be in uppercase
store.dispatch({type: "INC_COUNTER"});
//increase the counter by 10
store.dispatch({type: "ADD_COUNTER", value: 10});
console.log(store.getState());