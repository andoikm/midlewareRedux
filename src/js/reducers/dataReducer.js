let initialData = {
    data: []
};

const dataReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'GET_INITIAL_DATA':
            return Object.assign({}, state, {
                data: action.payload
            });
        default :
            return state;
    }
};

export default dataReducer;
