import { logout, setAuthData, updateTokenData } from './../reducers/auth'
import { addNewTableItem, deleteTableItem, setInitialState, updateTableItem } from './../reducers/tableItems'
import { addNewTableUserItem, deleteAllUsers, deleteTableUserItem, updateTableUserItem } from './../reducers/users'
import { addNewTableOwnerItem, deleteAllOwners, deleteTableOwnerItem, updateTableOwnerItem} from './../reducers/owners'
import {stopSubmit} from 'redux-form'
import axios from './../axios';
import { setAuthorization } from './../axios';
import { deleteAllCategories, deleteCategory, addCategory, updateCategory } from '../reducers/categories'
// import { setCategoriesItems, deleteAllCategories, addCategory } from './../reducers/categories';


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


export const getPreviewItems = (currentPage, categoryId, search) => {
    const res = axios.get(`/items?limit=10&skip=${currentPage}&category_id=${categoryId}&query=${search}`, {headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}).then( (res) => {
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
            // setDefaultAppValues(dispatch)

            // dispatch(logout())
            // dispatch(setInitialState())
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
            // setDefaultAppValues(dispatch)

            // dispatch(logout())
            // dispatch(setInitialState())
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
                room_id: [item.location],
                price: item.price
            })
            console.log(res.data)
            dispatch(updateTableItem(res.data))
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
        }
        catch (error) {
            console.log(error)
            // setDefaultAppValues(dispatch)

            // dispatch(logout())
            // dispatch(setInitialState())
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



export const addCategoriesItem = () => {
    return async dispatch => {
        try {
            const res = await axios.post('/categories')
            dispatch(addCategory(res.data))
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
            console.log(res.data)
            return res.data
        } catch (error) {
            console.log(error)
            // setDefaultAppValues(dispatch)
        }
    }
}

export const deleteCategoriesItem = (categoryId) =>{
    return async dispatch => {
        try {
            const res = await axios.delete(`/categories/${categoryId}`)
            console.log(res)
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
            dispatch(deleteCategory(categoryId))
        }
        catch (error) {
            console.log(error)
            // setDefaultAppValues(dispatch)

            dispatch(logout())
            dispatch(setInitialState())

        }
    }
}
export const updateCategoriesItem = (item) =>{
    console.log(item)
    return async dispatch => {
        try {
            const res = await axios.put(`/categories/${item.id}`,
            {
                title:item.title
            })
            console.log(res.data)
            dispatch(updateCategory(res.data))
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
        }
        catch (error) {
            console.log(error)
            // setDefaultAppValues(dispatch)

            // dispatch(logout())
            // dispatch(setInitialState())
        }
    }
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
            // setDefaultAppValues(dispatch)

            // dispatch(logout())
            // dispatch(setInitialState())

        }
    }
}

export const deleteUserItem = (userId) =>{
    console.log(userId)
    return async dispatch => {
        try {
            const res = await axios.delete(`/users/${userId}`)
            console.log(res)
            dispatch(deleteTableUserItem(userId))
            updateToken(dispatch)
            setAuthorization(localStorage.getItem('token'))
        }
        catch (error) {
            console.log(error)
            // setDefaultAppValues(dispatch)

            // dispatch(logout())
            // dispatch(setInitialState())

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
            // setDefaultAppValues(dispatch)

            // dispatch(logout())
            // dispatch(setInitialState())

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
            // setDefaultAppValues(dispatch)

            // dispatch(logout())
            // dispatch(setInitialState())

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
            // setDefaultAppValues(dispatch)

            // dispatch(logout())
            // dispatch(setInitialState())
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
            // setDefaultAppValues(dispatch)
            // dispatch(logout())
            // dispatch(setInitialState())
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


// export const createReport = () => {
//     return async dispatch => {
//         try {
//             const res = await axios.post('/items/report')
//             dispatch(addNewTableItem(res.data))
//             updateToken(dispatch)
//             setAuthorization(localStorage.getItem('token'))
//             console.log(res.data)
//             return res.data
//         } catch (error) {
//             console.log(error)
//             // setDefaultAppValues(dispatch)

//             // dispatch(logout())
//             // dispatch(setInitialState())
//         }
//     }
// }


export const createReport = (item) => {
    console.log(item)
    const res = axios.post(`/items/report`,

        {
            filters: {
                room_id: item.filters.room_id,
                profile_id: item.filters.profile_id,
                category_id: item.filters.category_id,
                department_id: item.filters.department_id
            },
            sort: "updated_at",
            order: "ASC",
            columns: item.columns
        },
        {responseType: 'blob'}


    )
    .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.xlsx');
        document.body.appendChild(link);
        link.click();
      });
    return res
}


export const importFiles = (items) => {
    console.log(items)


    let formData = new FormData();
    console.log(formData)
    let files = [...items]
    let count = 0
    files.forEach( item => {
        // console.log(item)
        formData.append(`file_${count}`, item)
        count++
    })
    console.log(files)
    const res = axios.post(`/items/imports`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    .then((res) => {
        console.log(res)
      });
    return res
}

export const getMe = () => {
    const res = axios.get(`/me`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }).then( (res) => {
        console.log(res)
        setAuthorization(localStorage.getItem('token'))
        return res
    } )
    return res
}


export const setDefaultAppValues = (dispatch) => {
    dispatch(logout())
    dispatch(setInitialState())
    dispatch(deleteAllUsers())
    dispatch(deleteAllOwners())
    dispatch(deleteAllCategories())
}