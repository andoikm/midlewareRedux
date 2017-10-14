import {GetData} from "../actions/actionInitialData";


export function fetchData () {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(GetData(responseJson));
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
