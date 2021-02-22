import axios from "axios"
import { setAuthData } from './../reducers/auth'


let instance = axios.create({})
if (localStorage.getItem('token')) {
    instance = axios.create({
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
}

export const getItems = () => {
    return axios.get('https://api.staging.inventory-platform.gq/items?limit=50', {headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}).then(res => res.data.items)
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
        }
    }
}
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