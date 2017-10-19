let initialData = {
    date: [],
    filter : {}
};

const filterDateReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'SET_FILTER_DATE':
            return Object.assign({}, state, {
                date: action.payload
            });
        case 'FILTER_BY_DATE':
            return Object.assign({}, state, {
                date: state.date,
                filter: action.payload
            });
        default :
            return state;
    }

};

export default filterDateReducer;