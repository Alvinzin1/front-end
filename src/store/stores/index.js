import API from "@/common/api.service";

import { STORE, INDEX, UPDATE, DELETE, GET_STORES_BY_USER } from "./actions.type";

import { SET_STORES_BY_USER } from "./mutations.type";

const STORES_BY_USER_STORAGE = `storesByUser`;

const state = {
    stores_by_user: []
};

const getters = {
    userStores(state) {
        return state.stores_by_user;
    }
};

const actions = {
    [INDEX](context, params) {
        return new Promise((resolve, reject) => {
            API.get("/store/index", params)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [STORE](context, params) {
        return new Promise((resolve, reject) => {
            API.post("/store/store", params)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [UPDATE](context, params) {
        return new Promise((resolve, reject) => {
            API.post("/store/update", params)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [DELETE](context, params) {
        return new Promise((resolve, reject) => {
            API.delete("/store/delete/" + params)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [GET_STORES_BY_USER](context, params) {
        return new Promise((resolve, reject) => {
            API.get("/store/getStoresByUser", params)
                .then(({ data }) => {
                    context.commit(SET_STORES_BY_USER, data);
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
};

const mutations = {
    [SET_STORES_BY_USER](state, { stores }) {
        state.stores_by_user = stores;
        localStorage.setItem(STORES_BY_USER_STORAGE, state.stores_by_user);
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};