import axios from "axios";
import * as errorList from "./errorList";
// import store from './store';


axios.defaults.baseURL = '/api';
axios.interceptors.response.use(response => response, error => {
  if (error.response) {

      console.log(error.response)
      let errorType = error.response.data.error

      if ([errorList.E_TOKEN_INVALID, errorList.E_TOKEN_EXPIRED,
          errorList.E_UNAUTHORIZED ].indexOf(errorType) !== -1) {
          clearAuthorization()
          window.location = '/login'
          return
      }
  }

  return Promise.reject(error);
});

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
