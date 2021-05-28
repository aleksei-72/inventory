import { applyMiddleware, combineReducers, createStore } from "redux";
import tableItemsReducer from './reducers/tableItems';
import authReducer from './reducers/auth';
import categoriesReducer from './reducers/categories';
import usersReducer from './reducers/users';
import ownersReducer from './reducers/owners';
import importsReducer from './reducers/imports';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    tableItemsReducer,
    authReducer,
    categoriesReducer,
    usersReducer,
    ownersReducer,
    importsReducer,
    form: formReducer
})


let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store
