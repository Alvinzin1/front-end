import { createStore } from 'vuex'

import auth from './auth';
import stores from './stores';
import products from './products';
import categories from './categories';
import request from './request';

const modules = {
    auth,
    stores,
    products,
    categories,
    request
};

const store = createStore({ modules });
export default store;