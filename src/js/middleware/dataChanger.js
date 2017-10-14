import {GetData} from "../actions/actionInitialData";
import {SetFilterDate} from "../actions/actionInitialData";


let date = Date.now();
let day = 60 * 60 * 1000 * 24 * 3;
let filterDate = [];
const dataChangerMiddleware = store => next => action => {

    switch (action.type){
        case  'GET_INITIAL_DATA':
            let newData = action.payload.map((data, i) => {
                if(i % 30 === 0){
                    date += day;
                    filterDate.push(date);
                }
                return Object.assign({}, data, {ts: date});
            });
            next(SetFilterDate(filterDate));
            next(GetData(newData));
            break;
        default :
            next(action);
    }



};

export default dataChangerMiddleware;