import API from "@/common/api.service";

import { 
    STORE, 
    INDEX, 
    UPDATE, 
    DELETE, 
    GET_CATEGORIES_ALL } from "./actions.type";

import { SET_CATEGORIES_ALL } from "./mutations.type";

const CATEGORIES_ALL_STORAGE = 'categoriesAll';

const state = {
    categories_all: []
};

const getters = {
    allCategories(state){
        return state.categories_all;
    }
};

const actions = {
    [INDEX](context, params) {
        return new Promise((resolve, reject) => {
            API.get("/category/index", params)
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
            API.post("/category/store", params)
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
            API.post("/category/update", params)
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
            API.delete("/category/delete/" + params)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [GET_CATEGORIES_ALL](context, params) {
        return new Promise((resolve, reject) => {
            API.get("/category/getCategoriesAll")
                .then(({ data }) => {
                    context.commit(SET_CATEGORIES_ALL, data);
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
};

const mutations = {
    [SET_CATEGORIES_ALL](state, { categories }) {
        state.categories_all = categories;
        localStorage.setItem(CATEGORIES_ALL_STORAGE, state.categories_all);
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};