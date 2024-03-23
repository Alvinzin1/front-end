import axios from "axios";
import App from '@/App.vue';
import store from "@/store";
import { createApp } from "vue";
import VueAxios from "vue-axios";
import jwtService from "@/common/jwt.service";

const app = createApp(App).use(VueAxios, axios);

function defineService(url = 'https://teste.com') {
    const validate = (data) => {
        if (data?.status == 46 || data?.status == 401 || data?.status == 463 || data?.status == 498) {
        }
    }

    return {
        async get(resource) {
            return new Promise((resolve, reject) => {
                app.axios.get(url + resource, {
                    headers: { Authorization: 'Bearer ' + jwtService.getToken() }
                }).then(data => {
                    resolve(data);
                }).catch(data => {
                    validate(data.response);
                    reject(data);
                });
            });
        },
        async post(resource, params) {
            return new Promise((resolve, reject) => {
                app.axios.post(url + resource, params, {
                    headers: { Authorization: 'Bearer ' + jwtService.getToken() }
                }).then(data => {
                    resolve(data);
                }).catch(data => {
                    validate(data.response);
                    reject(data);
                });
            });
        },
        async put(resource, params) {
            return new Promise((resolve, reject) => {
                app.axios.put(url + resource, params, {
                    headers: { Authorization: 'Bearer ' + jwtService.getToken() }
                }).then(data => {
                    resolve(data);
                }).catch(data => {
                    validate(data.response);
                    reject(data);
                });
            });
        },
        async delete(resource) {
            return new Promise((resolve, reject) => {
                app.axios.delete(url + resource, {
                    headers: { Authorization: 'Bearer ' + jwtService.getToken() }
                }).then(data => {
                    resolve(data);
                }).catch(data => {
                    validate(data.response);
                    reject(data);
                });
            });
        }
    }
}

export default defineService();
export { defineService };