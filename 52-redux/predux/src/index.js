import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import reducer from './reducer'
// an abstraction to help us track errors
import { ADD_QUESADILLA, ADD_TACO, REMOVE_TACO } from './types'


const store = createStore(reducer)

// dispatch is our new setState => will call the reducer for you
store.dispatch({type: ADD_QUESADILLA, payload: {name: "Cheesy boi", filling: "cheese"}})
store.dispatch({type: ADD_TACO, payload: {name: "Zebra deluxe", filling: "the finest zebras",shell: "gluten-free"}})

// allows you to READ from state
console.log("STATE", store.getState())

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
