import React from 'react';
import ReactDOM from 'react-dom';
//combine reducers merges our reducers into one state and one reducer
import { createStore, combineReducers } from 'redux'
import { Provider } from "react-redux"

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

//creating a store successfully with our own reducer
const store = createStore(rootReducer);

ReactDOM.render(
//Wrap the app with the store that we created.
//The store property is special to the Provider component
//Now the store is being passed as a prop
<Provider store={store}>
    <App/>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
