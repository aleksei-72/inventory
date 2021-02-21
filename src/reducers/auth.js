const SET_AUTH_DATA = "SET_AUTH_DATA";
const LOGOUT = "LOGOUT";

let initialState = {
    currentUser: {},
    token: "",
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {...state, token:action.data, isAuth:true}

        case LOGOUT:
                localStorage.removeItem('token')
                return {...state, currentUser: {}, isAuth:false}
    
        default:
            return state
    }
}


export const setAuthData = (data) => ({type:SET_AUTH_DATA, data})
export const logout = () => ({type:LOGOUT})


export default authReducer