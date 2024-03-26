<template>
    <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400">
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">{{ store }}</h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.name }}</h1>
                    <span class="title-font font-medium text-2xl text-gray-900">R$ {{ product.price }}</span>
                    <div>
                        <span v-for="category in product.categories" :key="category.id" class="bg-primary text-light text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                            {{ category.name }}
                        </span>
                    </div>
                    <div class="flex mt-10">
                        <div class="relative">
                            <span class="mr-3">Quantidade</span>
                            <input type="number" v-model="quantity" class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-1"/>
                        </div>
                        <button @click="insert()" class="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary-dark rounded">Fazer Pedido</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {
    SHOW
} from "@/store/products/actions.type";

import {
    STORE
} from "@/store/request/actions.type";

import { 
    UPDATE_USER_WALLET 
} from '@/store/auth/mutations.type';

export default {
    props: {
        productId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            product: {},
            store: '',
            quantity: null
        }
    },
    created(){
        this.getProduct();
    },
    methods: {
        getProduct(){
            this.$store
            .dispatch(SHOW, this.productId)
            .then((data) => {
                this.product = data.product;
                this.store = data.product.store.name;
            })
            .catch((error) => {
                console.error("Erro ao obter os produtos baratos:", error);
            });
        },
        insert() {
            const data = {
                productId: this.product.id, 
                quantity: this.quantity
            };

            const remainingBalance =  this.$store.getters.currentUser.wallet - (data.quantity * this.product.price);

            if (remainingBalance < 0) {
                alert('Saldo insuficiente. Você não tem dinheiro suficiente para realizar esta compra.');
                return;
            }

            this.$store.dispatch(STORE, data)
            .then(() => {
                const newValueWallet = this.$store.getters.currentUser.wallet - (data.quantity * this.product.price);
                this.$store.commit(UPDATE_USER_WALLET, newValueWallet);
                this.$router.push('/pedidos');
            }).catch(error => {
                console.error(error);
            });
        },
    }
}
</script>

