let initialData = {
    cart: {}
};

const cartReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let item = action.payload;
            let obj = {...state.cart };
                obj[item.id] = item;

           return {
                    ...state,
                    cart:obj
                   };
        case 'DELETE_FROM_CART' :
            let currentData = {...state.cart };
            delete currentData[action.payload];
            return {
                ...state,
                cart:currentData
            };
        default :
            return state;
    }
};

export default cartReducer;