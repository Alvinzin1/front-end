<template>
    <div class="bg-white m-3 rounded-md overflow-hidden">
        <div class="bg-primary text-center">
            <span class="text-white">Suas Lojas</span>
        </div>
        <div class="m-3">
            <div class="mb-3 flex">
                <button @click="setInsert" class="bg-primary text-white rounded inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
                    <i class="fa fa-plus py-1 mr-1"></i> Adicionar nova loja
                </button>
            </div>
            <div class="border-l border-r border-t rounded">
                <table class="border-collapse table-fixed w-full text-sm">
                    <thead class="">
                        <tr>
                            <th class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-left">
                                Nome</th>
                            <th class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-left">
                                Descrição</th>
                            <th class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-left">
                                Endereço</th>
                            <th class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-center">
                                Ação
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-slate-800">
                        <tr v-for="store in stores" :key="store.id">
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                {{ store.name }}
                            </td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                {{ store.description }}
                            </td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                {{ store.address }}
                            </td>
                            <td class="text-center text-white flex gap-1 p-4 items-center justify-center">
                                <router-link :to="{ name: 'StoreRequests', params: { storeId: store.id } }" class="border px-2 py-1 rounded bg-primary" title="Ver pedidos da loja" ref="link" >
                                    <i class="fa-solid fa-list"></i>
                                </router-link>
                                <router-link :to="{ name: 'Products', params: { storeId: store.id } }" class="border px-2 py-1 rounded bg-primary" title="Ver produtos" ref="link" >
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </router-link>
                                <button class="border px-2 py-1 rounded bg-primary" title="Atualizar Loja" @click="setUpdate(store)">
                                    <i class="fa fa-edit"></i>
                                </button>
                                <button class="border px-2 py-1 rounded bg-primary" title="Excluir Loja" @click="setDelete(store.id)">
                                    <i class="fa fa-x"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div ref="modalDOM" class="hidden">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-primary text-center">
                                <span class="text-white">Inserir</span>
                            </div>
                            <form class="space-y-4 md:space-y-6" @submit.prevent="submit" ref="form">
                                <div class="bg-white p-3">
                                    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div class="col-span-12">
                                            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nome da loja</label>
                                            <input type="text" name="name" id="name" v-model="formModel.name" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        </div>
                                        <div class="col-span-12">
                                            <label for="cep" class="block text-sm font-medium leading-6 text-gray-900">CEP</label>
                                            <input type="text" name="cep" id="cep" v-model="formModel.cep"
    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-1.5 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" maxlength="8">
                                            <button @click="searchAddress()" type="button" class="rounded-md bg-primary p-1 text-sm font-semibold text-white shadow-sm sm:w-auto mt-2">Pesquisar</button>
                                        </div>
                                        <div class="col-span-12">
                                            <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Endereço</label>
                                            <input type="text" name="address" id="address" v-model="formModel.address" class="block w-full rounded-md px-1.5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" disabled>
                                        </div>
                                        <div class="col-span-12">
                                            <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Descrição da loja</label>
                                            <textarea name="description" id="description" v-model="formModel.description" class="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-50 p-2 sm:flex sm:flex-row-reverse border-t">
                                    <button type="submit" class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">Salvar</button>
                                    <button type="button" @click="toggleModal" class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { STORE, UPDATE, DELETE, GET_STORES_BY_USER } from '@/store/stores/actions.type';
import viaCepService from '@/common/viaCep.service';

export default {
    data() {
        return {
            modal: null,
            stores: [],
            formModel: {
                id: null,
                name: '',
                cep: '',
                address: '',
                description: ''
            }
        };
    },
    mounted() {
        this.modal = this.$refs.modal;
    },
    created(){
        this.getStoresByUser();
    },
    methods: {
        async searchAddress() {
            try {
                const addressData = await viaCepService.get(`${this.formModel.cep}/json`);
                this.formModel.address = addressData.logradouro + ', ' + addressData.bairro;
            } catch (error) {
                console.error('Erro ao buscar endereço:', error);
            }
        },
        toggleModal() {
            if (this.$refs.modalDOM) {
                this.$refs.modalDOM.classList.toggle('hidden');
            }
        },
        getStoresByUser() {
            this.$store.dispatch(GET_STORES_BY_USER)
            .then((data) => {
                this.stores = data.stores;
            })
            .catch(error => {
                console.error('Erro ao obter os produtos baratos:', error);
            });
        },
        insert() {
            this.$store.dispatch(STORE, {...this.formModel}).then(() => {
                this.toggleModal();
                this.getStoresByUser();
            }).catch(error => {
                console.error(error);
            });
        },
        update() {
            this.$store.dispatch(UPDATE, {...this.formModel}).then(() => {
                this.toggleModal();
                this.getStoresByUser();
            }).catch(error => {
                console.error(error);
            });
        },
        delete(id){
            this.$store.dispatch(DELETE, id).then(() => {
                this.getStoresByUser();
            }).catch(error => {
                console.error(error);
            });
        },
        submit(){
            if (this.formModel.id) {
                this.update();
            }else{
                this.insert();
            }
        },
        setInsert(){
            this.$refs.form.reset();
            this.formModel.id = null;
            this.toggleModal();
        },
        setUpdate(store){
            const {id, name, description, cep, address} = store;
            this.formModel.id = id;
            this.formModel.name = name;
            this.formModel.description = description;
            this.formModel.cep = cep;
            this.formModel.address = address;
            this.toggleModal();
        },
        setDelete(id){
            confirm('Você deseja deletar realmente?') && this.delete(id);
        }
    }
}
</script>
