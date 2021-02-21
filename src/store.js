import { applyMiddleware, combineReducers, createStore } from "redux";
import tableItemsReducer from './reducers/tableItems';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';


let reducers = combineReducers({
    tableItemsReducer,
    authReducer
})
let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store