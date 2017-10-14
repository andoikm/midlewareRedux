import {SetFilterDate} from "../actions/actionInitialData";



const filterGenerateMiddleware = store => next => action => {

    switch (action.type){

        case 'SET_FILTER_DATE':
            let data = action.payload;
            break;

        default :
            return next(action);
    }
};

export default filterGenerateMiddleware;