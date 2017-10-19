
const cartMiddleware = store => next => action => {
    switch (action.type){
        case 'ADD_TO_CART' :
            let oldData = store.getState().cartReducer.cart;
            let {payload} = action;
            if( oldData[payload.id] && oldData[payload.id].count === payload.count && payload.count){
                    alert('product already exist in your basket');
                break;
            }

            if( payload.count === 0){
                alert('please select count');
                break;
            }

            next(action);
            break;
        default :
            next(action);
    }
};


export default cartMiddleware;