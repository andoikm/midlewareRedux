import { SET_FILTER_DATE } from "../actions/actionTypes/index";


let initialData = {
    date: []
};

const filterDateReducer = (state = initialData, action) => {
    switch (action.type) {
        case SET_FILTER_DATE:
            return Object.assign({}, state, {
                date: action.payload
            });
            debugger;
        default :
            return state;
    }

};

export default filterDateReducer;