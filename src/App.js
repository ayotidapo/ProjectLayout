import React from 'react';
import { Provider } from 'react-redux';

// import axios from 'axios';
// eslint-disable-next-line camelcase
// import jwt_decode from 'jwt-decode';

import Routes from './config/routes';
import store from './redux/store';

// if (window.location.hostname.includes('bluegreensoft')) {
//   axios.defaults.baseURL = 'http://api-learn-staging.bluegreensoft.com:8081/v2';
// } else {
//   axios.defaults.baseURL = 'http://52.2.153.12:8081/v2';
// }

// axios.interceptors.request.use(
//   request => request,
//   error => {
//     alert(`No internet1: ${error}`);
//     // return Promise.reject(error);//Maybe important for global error like Network Error due to Request
//   },
// );
// axios.interceptors.response.use(
//   response => response,
//   error => {
//     alert(`No internet2: ${error}`);//May be important for global error like Network Error due to response
//     // return Promise.reject(error);
//   },
// );

// axios.defaults.baseURL = "http://api-learn-staging.bluegreensoft.com:8081/v1";

// if (localStorage.token) {
// const { token } = localStorage;
// let decoded = null;
// set auth token header auth;
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// if (token) decoded = jwt_decode(localStorage.token);

// set current user
// sets persistent session
// if (token) store.dispatch(getUserDetails(decoded.id));
// store.dispatch(setAuthenticate());
// history.replace('/app/for-you');
//  if token   Get Student By ID
// 0.0.0.0:8081/v2/user/5d39b466e9d76bcc54356bdb

// check for expired token
// const currentTime = Date.now() / 1000;
// if (decoded.exp < currentTime) {
// store.dispatch(logOutUser());
// window.location.href = "/";
// }
// }

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
