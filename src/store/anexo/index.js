import API from "@/common/api.service";

import {
    STORE,
    INDEX,
    UPDATE,
    DELETE,
} from "./actions.type";

const state = {};

const getters = {};

const actions = {
    [INDEX](context, params) {
        return new Promise((resolve, reject) => {
            API.post("/anexo/index", params)
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
            API.post("/anexo/store", params)
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
            API.post("/anexo/update", params)
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
            API.post("/anexo/delete", params)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
};

const mutations = {};

export default {
    state,
    actions,
    mutations,
    getters
};