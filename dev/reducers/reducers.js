import {combineReducers} from 'redux';
import todosReducers from './todos-reducers';

const allReducers = combineReducers({
	tasks: todosReducers
});

export default allReducers;