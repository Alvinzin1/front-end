import cookie from 'vue-cookies'
import pkg from '@/../package.json';

const KEY = `token`;

export const getToken = function () {
    return cookie.get(KEY);
};

export const setToken = function (token) {
    cookie.set(KEY, token, '8h');
};

export const destroyToken = function () {
    cookie.remove(KEY);
};

export default { getToken, setToken, destroyToken };