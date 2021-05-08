import { setAuthData, updateTokenData } from './../reducers/auth'
import { addNewTableItem, deleteTableItem, updateTableItem } from './../reducers/tableItems'
import { addNewTableUserItem, deleteTableUserItem, updateTableUserItem } from './../reducers/users'
import { addNewTableOwnerItem, deleteTableOwnerItem, updateTableOwnerItem} from './../reducers/owners'
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
    console.log(item)
    return async dispatch => {
        try {
            const res = await axios.put(`/items/${item.id}`,
            {
                id:item.id,
                number:item.number,
                category_id: item.category,
                // profile_string: item.owner,
                title:item.title,
                comment:item.comment,
                count:item.count,
                profile_id: item.profile,
                room_id: [item.location]
            })
            console.log(res.data)
            dispatch(updateTableItem(res.data))
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

export const getUsers = (dispatch) => {
    return axios.get(`/users`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
        .then((res) => {
            console.log(res.data)
            // dispatch(setCategoriesItems(res.data))
            // setAuthorization(localStorage.getItem('token'))
            return res.data
        })
}

export const addTableUserItem = () => {
    return async dispatch => {
        try {
            const res = await axios.post('/users')
            dispatch(addNewTableUserItem(res.data))
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
            console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteUserItem = (userId) =>{
    return async dispatch => {
        try {
            const res = await axios.delete(`/users/${userId}`)
            console.log(res)
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
            dispatch(deleteTableUserItem(userId))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const updateUser = (user) =>{
    console.log(user)
    return async dispatch => {
        try {
            const res = await axios.put(`/users/${user.id}`,
            {
                id: user.id,
                name:user.name,
                username:user.username,
                role:user.role,
                blocked:user.blocked
            })
            console.log(res)
            dispatch(updateTableUserItem(user))
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getProfiles = (dispatch) => {
    return axios.get(`/profiles`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
        .then((res) => {
            console.log(res.data)
            // dispatch(setCategoriesItems(res.data))
            setAuthorization(localStorage.getItem('token'))
            return res.data
        })
}

export const addTableOwnerItem = () => {
    return async dispatch => {
        try {
            const res = await axios.post('/profiles', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            dispatch(addNewTableOwnerItem(res.data))
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
            console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateOwner = (owner) =>{
    console.log(owner)
    return async dispatch => {
        try {
            const res = await axios.put(`/profiles/${owner.id}`,
            {
                name:owner.name                
            })
            console.log(res)
            dispatch(updateTableOwnerItem(owner))
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const deleteOwnerItem = (ownerId) =>{
    return async dispatch => {
        try {
            const res = await axios.delete(`/profiles/${ownerId}`)
            console.log(res)
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
            dispatch(deleteTableOwnerItem(ownerId))
        }
        catch (error) {
            console.log(error)
        }
    }
}






export const getRooms = (dispatch) => {
    return axios.get(`/rooms`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
        .then((res) => {
            console.log(res.data)
            // dispatch(setCategoriesItems(res.data))
            setAuthorization(localStorage.getItem('token'))
            return res.data
        })
}


// export const addTableOwnerItem = (dispatch) => {
//     return axios.post(`/profiles`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
//         .then((res) => {
//             console.log(res.data)
//             // dispatch(setCategoriesItems(res.data))
//             setAuthorization(localStorage.getItem('token'))
//             return res.data
//         })
//         .catch (error => console.log(error))
// }





// export const updateToken = (dispatch) => {
//     return axios.post('/token')
//     .then( res => {
//         dispatch(updateTokenData(res.data))
//         return res.data
//     } )
// }
