import axios from "axios";
import * as errorList from "./errorList";
//import {stopSubmit} from "redux-form";


axios.defaults.baseURL = 'https://api.staging.inventory-platform.gq';
axios.interceptors.response.use(response => response, error => {
  if (error.response) {

      console.log(error.response)
      let errorType = error.response.data.error

      if ([errorList.E_TOKEN_INVALID, errorList.E_TOKEN_EXPIRED,
          errorList.E_UNAUTHORIZED ].indexOf(errorType) !== -1) {
          clearAuthorizationAndRedirect()
          return
      }
  }

  return Promise.reject(error);
});

const clearAuthorizationAndRedirect = () => {
    clearAuthorization()
    window.location = "/login"
}

export const setAuthorization = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('token', token)
}

export const clearAuthorization = () => {
  axios.defaults.headers.common['Authorization'] = null;
  localStorage.removeItem('token')
}

export const getAuthorization = () => {
    return localStorage.getItem('token');
}

export default axios;