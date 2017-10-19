import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import filterDateReducer from './filterDateReducer';
import cartReducer from './cartReducer';

const allReducers = combineReducers({
    dataReducer,
    filterDateReducer,
    cartReducer

});

export default allReducers;
