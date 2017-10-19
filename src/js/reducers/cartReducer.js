let initialData = {
    cart: {}
};

const cartReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let item = action.payload;
            let obj = {...state.cart};
                obj[item.id] = item;
           return Object.assign({}, state, {cart:obj});
        default :
            return state;
    }
};

export default cartReducer;