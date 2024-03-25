import './assets/css/style.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import { VueMaskDirective } from 'vue-the-mask';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

app.directive('mask', VueMaskDirective);
app.use(router);
app.use(store);
app.mount('#app');