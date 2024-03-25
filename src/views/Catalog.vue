<template>
    <div class="container mx-auto mb-5 mt-6">
        <div>
            <input type="text" placeholder="Search..." class="border md:w-auto border-primary text-primary-dark rounded-sm py-1 px-3 mx-1 focus:outline-none text-base mt-4 md:mt-0" v-model="searchTerm">
            <button class="bg-primary text-white rounded inline-flex items-center border-0 py-2 px-3 mx-1 focus:outline-none text-base mt-4 md:mt-0" @click="handleSearch">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button class="bg-primary text-white rounded inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none text-base mt-4 md:mt-0" @click="getAllProducts">
                Limpar filtro
            </button>
        </div>
        <div class="flex flex-wrap">
            <ItemCard v-for="(item, index) in products" :key="item.id" :data="item"></ItemCard>
        </div>
    </div>
</template>

<script>
import { GET_PRODUCTS_ALL } from '@/store/products/actions.type';
import { GET_PRODUCTS_BY_SEARCH } from '@/store/products/actions.type';
import ItemCard from '@/components/ItemCard.vue';

export default {
    name: "CatalogView",
    components: {
        ItemCard
    },
    data() {
        return {
            products: [],
            searchTerm: ''
        };
    },
    created(){
        this.getAllProducts(); 
    },
    methods: {
        handleSearch() {
            if(this.searchTerm) {
                this.getProductsSearch(this.searchTerm);
            } else {
                this.getAllProducts(); 
            }
        },
        getAllProducts() {
            this.$store.dispatch(GET_PRODUCTS_ALL)
            .then((data) => {
                this.products = data.products;
            })
            .catch(error => {
                console.error('Erro ao obter os produtos baratos:', error);
            });
        },

        getProductsSearch(searchTerm) {
            this.$store.dispatch(GET_PRODUCTS_BY_SEARCH, searchTerm)
            .then((data) => {
                this.products = data.products;
            })
            .catch(error => {
                console.error('Erro ao obter os produtos da pesquisa:', error);
            });
        }
    }
}
</script>
