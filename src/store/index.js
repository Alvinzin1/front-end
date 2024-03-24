import { createStore } from 'vuex'

import auth from './auth';
// import produstos from './produtos';
// import lojas from './produtos';

const modules = {
    auth,
    // produstos,
    // lojas,
};

const store = createStore({ modules });
export default store;