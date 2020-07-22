import React from 'react';
import ReactDOM from 'react-dom';
//combine reducers merges our reducers into one state and one reducer
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from "react-redux"
import thunk from "redux-thunk";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from "./store/reducers/counter"
import resultReducer from "./store/reducers/result"

//merges all reducers together to one reducer
//combineReducers uses a map function
//it adds another layer of nesting, so take into consideration for mapstatetoprops
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

//middleware
//takes a function, takes store as the input, so it will execute the middleware function, then give us the store
const logger = store => {
    //returns another function that receives the next argument
    return next => {
        //receives the action
        return action => {
            console.log("[Middleware] Dispatching", action);
            //must pass the action as an argument, so we can change it? i think?
            const result = next(action);
            console.log("[Middleware] next state", store.getState());
            return result;
        }
    }
};

//setting up for redux devtools, using this method because we are using middleware and enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//creating a store successfully with our own reducer
//next argument is the enhancer
//you can pass more enhancers, or middleware
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
//Wrap the app with the store that we created.
//The store property is special to the Provider component
//Now the store is being passed as a prop
<Provider store={store}>
    <App/>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
