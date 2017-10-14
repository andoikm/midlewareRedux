import {GET_INITIAL_DATA} from "./actionTypes/index";
import {SET_FILTER_DATE}  from "./actionTypes/index";
import {FILTER_DATE} from "./actionTypes/index";


export const GetData = (payload) => {
    return {
        type: GET_INITIAL_DATA,
        payload
    };
};

export const SetFilterDate = (payload) => {
    return {
        type: SET_FILTER_DATE,
        payload
    };
};

export const filterData = (payload) => {
    return {
        type: FILTER_DATE,
        payload
    };
};


