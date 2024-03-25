import JwtService from "@/common/jwt.service";
import API from "@/common/api.service";

import { LOGIN, LOGOUT, REGISTER } from "./actions.type";
import { SET_AUTH, PURGE_AUTH } from "./mutations.type";

const USER_STORAGE = `user`;

Storage.prototype.select = function (key) {
    return JSON.parse(this.getItem(key));
}

Storage.prototype.insert = function (key, value) {
    return this.setItem(key, JSON.stringify(value));
}

const state = {
    user: localStorage.select(USER_STORAGE),
    isAuthenticated: !!JwtService.getToken(),
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};

const actions = {
    [LOGIN](context, credentials) {
        return new Promise((resolve, reject) => {
            API.post('/login', credentials)
                .then(({ data }) => {
                    context.commit(SET_AUTH, data);
                    resolve();
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [REGISTER](context, credentials) {
        return new Promise((resolve, reject) => {
            API.post('/register', credentials)
                .then(({ data }) => {
                    context.commit(SET_AUTH, data);
                    resolve();
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [LOGOUT](context, credentials) {
        return new Promise((resolve, reject) => {
            API.post('/logout', credentials)
                .then(() => {
                    context.commit(PURGE_AUTH);
                    resolve();
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    }
};

const mutations = {
    // Armazena o token JWT retornado pelo backend para autenticação posterior
    [SET_AUTH](state, { user, access_token }) {
        state.user = user;
        state.isAuthenticated = true;
        JwtService.setToken(access_token);
        localStorage.insert(USER_STORAGE, state.user);
    },
    [PURGE_AUTH](state) {
        state.user = {};
        state.isAuthenticated = false;
        JwtService.destroyToken();
        localStorage.removeItem(USER_STORAGE);
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
