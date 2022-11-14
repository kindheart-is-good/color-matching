import {combineReducers, legacy_createStore} from "redux";

let reducers = combineReducers({ });

let store = legacy_createStore(reducers);



            /*  Для дебага из консоли браузера.   */
window.store = store;

export default store;