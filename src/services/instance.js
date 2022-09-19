import axios from 'axios';
import SnackbarUtils from '../components/Snackbar';
// import { BehaviorSubject } from 'rxjs';
import {
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  USER_LOCAL_STORE,
  BAD_REQUEST,
} from '../constants';
// import { onSignOut } from '@/util';

const API = axios.create({ baseURL: 'https://computershop0101.herokuapp.com/api' });
// const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem(USER_LOCAL_STORE)));
// const API_REDSHIFT = axios.create({ baseURL: process.env.REACT_APP_API_REDSHIFT_URL });
// function logout() {
//   localStorage.removeItem(USER_LOCAL_STORE);
// currentUserSubject.next(null);
//   return window.location.replace('/login');
// }

export function defaultRequestHeaders() {
  const user = JSON.parse(localStorage.getItem(USER_LOCAL_STORE));
  if (user && user.access_token) {
    return {
      Authorization: `${user.token_type} ${user.access_token}`,
    };
  }
  return {};
}

export const apiBase = (options) => new Promise((resolve, reject) => {
  API(options)
    .then((response) => {
      resolve(response);
    })
    .catch((errors) => {
      reject(errors);
    });
});

// export const apiRedshift = (options) => new Promise((resolve, reject) => {
//   API_REDSHIFT(options)
//     .then((response) => {
//       resolve(response);
//     })
//     .catch((errors) => {
//       reject(errors);
//     });
// });

const err = (error) => {
  const messError = error;
  const { response } = messError;
  if (response) {
    const { data } = response;
    switch (response.status) {
      case UNAUTHORIZED:
        messError.message = `Error ${UNAUTHORIZED}`;
        SnackbarUtils.error(`${response.status} ${data.message}`);
        break;
      case FORBIDDEN:
        messError.message = `Error ${FORBIDDEN}`;
        SnackbarUtils.error(`${response.status} ${data.message}`);
        break;
      case NOT_FOUND:
        messError.message = `Error ${NOT_FOUND}`;
        SnackbarUtils.error(`${response.status} ${data.message}`);
        break;
      case INTERNAL_SERVER_ERROR:
        messError.message = `Error ${INTERNAL_SERVER_ERROR}`;
        SnackbarUtils.error(`${response.status} ${data.message}`);
        break;
      case BAD_REQUEST:
        messError.message = `Error ${BAD_REQUEST}`;
        SnackbarUtils.error(`${response.status} ${data.message}`);
        break;
      default:
        messError.message = data.message;
        SnackbarUtils.error(`${response.status} ${data.message}`);
        break;
    }
  }
  return Promise.reject(error);
};

API.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
    ...defaultRequestHeaders(),
  },
}), err);
// API_REDSHIFT.interceptors.request.use((config) => ({
//   ...config,
//   headers: {
//     ...config.headers,
//     ...defaultRequestHeaders(),
//   },
// }), err);

API.interceptors.response.use((response) => response, err);
// API_REDSHIFT.interceptors.response.use((response) => response, err);
