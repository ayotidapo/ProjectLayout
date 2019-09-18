/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */

import jwt_decode from 'jwt-decode';

export const capitalized = function(value) {
  return value.replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase();
  });
};

export const captialize = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const isPhony = value => {
  return /^0[1-9]([0-9]{9})/.test(value);
};

export const isObjEmpty = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const getCurrentUserId = () => {
  if (localStorage.token) {
    const decoded = jwt_decode(localStorage.token);
    return decoded;
  }
};
