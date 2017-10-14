import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import filterDateReducer from './filterDateReducer';

const allReducers = combineReducers({
    dataReducer,
    filterDateReducer,
});

export default allReducers;
