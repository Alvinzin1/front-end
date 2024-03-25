import { createStore } from 'vuex'

import auth from './auth';
import stores from './stores';
import products from './products';

const modules = {
    auth,
    stores,
    products,
};

const store = createStore({ modules });
export default store;