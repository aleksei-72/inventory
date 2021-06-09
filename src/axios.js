import axios from "axios";
import {Redirect} from "react-router-dom";
import React from "react";
// import store from './store';


axios.defaults.baseURL = 'https://api.staging.inventory-platform.gq';
axios.interceptors.response.use(response => response, error => {
  if (error.response) {

    if (error.response.status === 401) {
        console.log(error.response.status)
        clearAuthorization();


      //return <Redirect to={"/login"} />
        // store.getState().authReducer.isAuth = false
         window.location = "/login"

    } else if (error.response.status >= 500) {
      console.error('[axios] server error:', { ...error });
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

export default axios;