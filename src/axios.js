import axios from "axios";
// import { Redirect } from "react-router";

// import store from './store';
// import { Redirect } from 'react-router';


axios.defaults.baseURL = 'https://api.staging.inventory-platform.gq';

axios.interceptors.response.use(response => response, error => {
  if (error.response) {
    if (error.response.status === 401) {
    //   store.dispatch('user/logout').then(() => {
        console.log(error.response.status)
        console.log(401)
        clearAuthorization();
        // router.replace({ path: '/get' }).catch(() => {});
    //   });
    // console.error('[axios] server error:', { ...error });

        // return <Redirect to= '/login' />

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