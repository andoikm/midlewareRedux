
const cartMiddleware = store => next => action => {
    switch (action.type){
        case 'ADD_TO_CART' :
            let oldData = store.getState().cartReducer;
            if(oldData.cart[action.payload.id] && oldData.cart[action.payload.id].count === action.payload.count){
                break;
            }
            next(action);
            break;
        default :
            next(action);
    }
};


export default cartMiddleware;