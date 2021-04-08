
// import axios from "axios"
import { setAuthData, updateTokenData } from './../reducers/auth'
import { addNewTableItem, deleteTableItem, updateTableItem } from './../reducers/tableItems'
import {stopSubmit} from 'redux-form'
import axios from './../axios';
import { setAuthorization } from './../axios';


// let axios = axios.create({})
// if (localStorage.getItem('token')) {
//     axios = axios.create({
//         headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//     })
// }

export const updateToken = (dispatch) => {
    return axios.post('/token')
    .then( res => {
        dispatch(updateTokenData(res.data))
        return res.data
    } )
}



export const getItems = (currentPage) => {
    const res = axios.get(`/items?limit=15&skip=${currentPage}`, {headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}).then( (res) => {
        setAuthorization(localStorage.getItem('token'))
        return res
    } )
    return res
}

export const login = (username, password) => {
    return async dispatch => {
        try {
            const res = await axios.post('/auth', { username, password })
            localStorage.setItem('token', res.data)
            setAuthorization(res.data)
            dispatch(setAuthData(res.data))
            console.log(res)
        } catch (error) {
            console.log(error)            
            dispatch(stopSubmit("login", {_error: "Пользователь не был найден в системе"}))
        }
    }
}

export const addTableItem = () => {
    return async dispatch => {
        try {
            const res = await axios.post('/items')
            dispatch(addNewTableItem(res.data))
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
            console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteItem = (itemId) =>{
    return async dispatch => {
        try {
            const res = await axios.delete(`/items/${itemId}`)
            console.log(res)
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
            dispatch(deleteTableItem(itemId))
        }
        catch (error) {
            console.log(error)
        }
    }
}


export const updateItem = (item) =>{
    return async dispatch => {
        try {
            const res = await axios.put(`/items/${item.id}`,
            {
                id:item.id,
                number:item.number,
                title:item.title,
                comment:item.comment,
                count:item.count
            })
            console.log(res)
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
            dispatch(updateTableItem(item))
        }
        catch (error) {
            console.log(error)
        }
    }
}

