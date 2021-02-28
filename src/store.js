import { applyMiddleware, combineReducers, createStore } from "redux";
import tableItemsReducer from './reducers/tableItems';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import {reducer as formReducer} from 'redux-form';



let reducers = combineReducers({
    tableItemsReducer,
    authReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store