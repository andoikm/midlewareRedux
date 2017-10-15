import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './js/reducers/index';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import dataChanger from './js/middleware/dataChanger';
import { HashRouter as Router, Route } from 'react-router-dom';

import { init } from  './js/helpers/bootstrap';

import Home from './js/components/home';

const middleware = [thunk, dataChanger ];
const store = createStore(allReducers,applyMiddleware(...middleware));

init(store);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path='/' component={Home} />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
