import {GetData} from "../actions/actionInitialData";


let date = Date.now();
let dey = 60 * 60 * 1000 * 24 * 3;
const dataChangerMiddleware = store => next => action => {
    let newData = action.payload.map((data, i) => {
        if(i % 30 === 0){
            date += dey;
        }
        return Object.assign({}, data, {ts: date});
    });

    next(GetData(newData));
};

export default dataChangerMiddleware;