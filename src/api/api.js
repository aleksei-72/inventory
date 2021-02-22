import axios from "axios"
import { setAuthData } from './../reducers/auth'

let temporary = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3MiwidXNlcl9yb2xlIjoiYWRtaW4iLCJleHAiOjE3NzA4MTc2Mjh9.IjECD5-VVp3ERbAZjD5IYCXhqa-PO3M3IWJOemXY9iA"

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
            localStorage.setItem('token', temporary)
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