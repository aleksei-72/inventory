import axios from "axios"
import { setAuthData } from './../reducers/auth'
import { addNewTableItem, deleteTableItem, updateTableItem } from './../reducers/tableItems'
import {stopSubmit} from 'redux-form'


let instance = axios.create({})
if (localStorage.getItem('token')) {
    instance = axios.create({
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
}

export const getItems = (currentPage) => {
    return axios.get(`https://api.staging.inventory-platform.gq/items?limit=15&skip=${currentPage}`, {headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
}

export const login = (username, password) => {
    return async dispatch => {
        try {
            const res = await instance.post('https://api.staging.inventory-platform.gq/auth', { username, password })
            localStorage.setItem('token', res.data)
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
            const res = await instance.post('https://api.staging.inventory-platform.gq/items')
            dispatch(addNewTableItem(res.data))
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
            const res = await instance.delete(`https://api.staging.inventory-platform.gq/items/${itemId}`)
            console.log(res)
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
            const res = await instance.put(`https://api.staging.inventory-platform.gq/items/${item.id}`,
            {
                id:item.id,
                number:item.number,
                title:item.title,
                comment:item.comment,
                count:item.count
            })
            console.log(res)
            dispatch(updateTableItem(item))
        }
        catch (error) {
            console.log(error)
        }
    }
}





//**************************************************************************************************************************************************************************************************** */


// export const me = () => {
//     return async dispatch => {
//         try {
//             const res = await instance.get('https://api.staging.inventory-platform.gq/me')
//             console.log(res)
//         } catch (error) {
//             localStorage.removeItem('token')
//             console.log(error)
//         }
//     }
// }