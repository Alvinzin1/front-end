import { createStore } from 'vuex'
import anexo from './anexo';

const modules = {
    anexo,
};

const store = createStore({ modules });
export default store;