import { applyMiddleware, combineReducers, createStore } from "redux";
import tableItemsReducer from './reducers/tableItems';
import authReducer from './reducers/auth';
import categoriesReducer from './reducers/categories';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users';



let reducers = combineReducers({
    tableItemsReducer,
    authReducer,
    categoriesReducer,
    usersReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store
