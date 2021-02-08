import { applyMiddleware, combineReducers, createStore } from "redux";
import tableItemsReducer from './reducers/tableItems';
import thunk from 'redux-thunk';


let reducers = combineReducers({
    tableItemsReducer
})
let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store