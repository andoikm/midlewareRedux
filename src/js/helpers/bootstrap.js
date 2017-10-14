import {fetchData} from "./fetch";

export function init (store) {
    store.dispatch(fetchData())
}