import { setAuthData, updateTokenData } from './../reducers/auth'
import { addNewTableItem, deleteTableItem, updateTableItem } from './../reducers/tableItems'
import {stopSubmit} from 'redux-form'
import axios from './../axios';
import { setAuthorization } from './../axios';
// import { setCategoriesItems } from './../reducers/categories';


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

export const getItems = (currentPage, categoryId, search) => {
    const res = axios.get(`/items?limit=15&skip=${currentPage}&category_id=${categoryId}&query=${search}`, {headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}).then( (res) => {
        console.log(res)
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
                category_string: item.category,
                profile_string: item.owner,
                title:item.title,
                comment:item.comment,
                count:item.count,
                room_string: [item.location]
            })
            console.log(res)
            dispatch(updateTableItem(item))
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getCategories = (dispatch) => {
    return axios.get(`/categories`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
        .then((res) => {
            console.log(res.data)
            // dispatch(setCategoriesItems(res.data))
            setAuthorization(localStorage.getItem('token'))
            return res.data
        })
}


// export const getSearchItems = (search) => {
//     return axios.get(`/items?query=${search}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
//         .then((res) => {
//             console.log(res.data)
//             // dispatch(setCategoriesItems(res.data))
//             setAuthorization(localStorage.getItem('token'))
//             return res.data
//         })
// }



// export const updateToken = (dispatch) => {
//     return axios.post('/token')
//     .then( res => {
//         dispatch(updateTokenData(res.data))
//         return res.data
//     } )
// }
