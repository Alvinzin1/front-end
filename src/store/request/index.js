import API from "@/common/api.service";

import {
    STORE,
    INDEX,
    UPDATE,
    DELETE,
    GET_REQUESTS_BY_USER,
    GET_REQUESTS_BY_STORE
} from "./actions.type";

const state = {};

const getters = {};

const actions = {
    [INDEX](context, params) {
        return new Promise((resolve, reject) => {
            API.post("/request/index", params)
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
            API.post("/request/store", params)
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
            API.post("/request/update", params)
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
            API.post("/request/delete", params)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [GET_REQUESTS_BY_USER](context, params) {
        return new Promise((resolve, reject) => {
            API.get("/request/getRequestsByUser")
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
    [GET_REQUESTS_BY_STORE](context, params) {
        return new Promise((resolve, reject) => {
            API.get("/request/getRequestsByStore/" + params)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
};

const mutations = {
    
};

export default {
    state,
    actions,
    mutations,
    getters
};