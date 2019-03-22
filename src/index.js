import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger'
import {loadstate, savestate} from './localstorage'
import throttle from 'lodash/throttle'

const localcopy = loadstate();

const store =  createStore(
    reducer,
    localcopy,
    applyMiddleware(thunk, logger)
)

store.subscribe(throttle(() => {
    savestate(store.getState());
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
