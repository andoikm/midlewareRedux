export const GetData = (payload) => (
    {
        type: 'GET_INITIAL_DATA',
        payload
    }
);

export const SetFilterDate = (payload) => (
    {
        type: 'SET_FILTER_DATE',
        payload
    }
);

export const filterByDate = (payload) => (
    {
        type : 'FILTER_BY_DATE',
        payload
    }
);

export const AddToCart = (payload) => (
    {
        type : 'ADD_TO_CART',
        payload
    }
);



