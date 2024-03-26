import API from "@/common/api.service";

import { 
    INDEX, 
    STORE, 
    SHOW,
    UPDATE, 
    DELETE, 
    GET_PRODUCTS_CHEAP, 
    GET_PRODUCTS_ALL, 
    GET_PRODUCTS_BY_SEARCH,
    GET_PRODUCTS_BY_STORE } from "./actions.type";

import { 
    SET_PRODUCTS_CHEAP, 
    SET_PRODUCTS_ALL } from "./mutations.type";

const PRODUCTS_CHEAP_STORAGE = 'productsCheap';
const PRODUCTS_ALL_STORAGE = 'productsAll';

const state = {
    products_cheap: [],
    products_all: []
};

const getters = {
  cheapProducts(state) {
    return state.products_cheap;
  },

  allProducts(state){
    return state.products_all;
  }
};

const actions = {
    [INDEX](context, params) {
        return new Promise((resolve, reject) => {
            API.get("/product/index", params)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [SHOW](context, params) {
        return new Promise((resolve, reject) => {
            API.get("/product/show/" + params)
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
            API.post("/product/store", params)
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
            API.post("/product/update", params)
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
            API.delete("/product/delete/" + params)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [GET_PRODUCTS_CHEAP](context, params) {
        return new Promise((resolve, reject) => {
            API.get("/product/getProductsCheap")
                .then(({ data }) => {
                    context.commit(SET_PRODUCTS_CHEAP, data);
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [GET_PRODUCTS_ALL](context, params) {
        return new Promise((resolve, reject) => {
            API.get("/product/getProductsAll")
                .then(({ data }) => {
                    context.commit(SET_PRODUCTS_ALL, data);
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [GET_PRODUCTS_BY_SEARCH](context, params) {
        return new Promise((resolve, reject) => {
            API.get("/product/getProductsBySearch/" + params)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [GET_PRODUCTS_BY_STORE](context, params) {
        return new Promise((resolve, reject) => {
            API.get("/product/getProductsByStore/" + params)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    }
};

const mutations = {
    [SET_PRODUCTS_ALL](state, { products }) {
        state.products_all = products;
        localStorage.setItem(PRODUCTS_ALL_STORAGE, state.products_all);
    },

    [SET_PRODUCTS_CHEAP](state, { products_cheap }) {
        state.products_cheap = products_cheap;
        localStorage.setItem(PRODUCTS_CHEAP_STORAGE, state.products_cheap);
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};