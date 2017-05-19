'use strict';

import { createStore } from 'redux';
import reducer from './reducers/root-reducer';
import { applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

export default createStore(reducer, applyMiddleware(loggerMiddleware));
