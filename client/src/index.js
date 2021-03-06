import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import promiseMiddleWare from './midleware/promiseMiddleWare';
import reducers from './reducers';
import Routes from './routes';

const store = createStore(reducers, applyMiddleware(promiseMiddleWare));
    window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root'));
