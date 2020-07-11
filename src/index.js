import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from "react-redux"

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from "./store/reducer"

//creating a store successfully with our own reducer
const store = createStore(reducer);

ReactDOM.render(
//Wrap the app with the store that we created.
//The store property is special to the Provider component
//Now the store is being passed as a prop
<Provider store={store}>
    <App/>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
