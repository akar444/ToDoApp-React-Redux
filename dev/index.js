import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import allReducers from './reducers/reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
require('./stylesheets/stylesheet.scss');

const logger = createLogger();

const store = createStore(
	allReducers,
	applyMiddleware(logger)
	);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));