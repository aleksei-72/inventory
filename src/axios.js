import axios from "axios";
// import store from './store';


axios.defaults.baseURL = 'https://api.staging.inventory-platform.gq';
axios.interceptors.response.use(response => response, error => {
  if (error.response) {
    if (error.response.status === 401) {
        console.log(error.response.status)
        clearAuthorization();


        // store.getState().authReducer.isAuth = false
        // window.location = "/login"

    } else if (error.response.status >= 500) {
      console.error('[axios] server error:', { ...error });
    }
  }

  return Promise.reject(error);
});


export const setAuthorization = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const clearAuthorization = () => {
  axios.defaults.headers.common['Authorization'] = null;
}

export default axios;