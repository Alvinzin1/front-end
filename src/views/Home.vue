<template>
    <section class="text-gray-600 body-font mt-5">
        <div class="container mx-auto mb-5">
            <div class="bg-primary rounded-lg mb-1 px-3">
                <span class="font-bold text-1xl text-white">Os Items mais baratos</span>
            </div>
            <div class="flex flex-wrap">
                <ItemCard v-for="(item, index) in cheapProducts" :key="item.id" :data="item"></ItemCard>
            </div>
        </div>
    </section>
</template>

<script>
import { GET_PRODUCTS_CHEAP } from '@/store/products/actions.type';
import ItemCard from '@/components/ItemCard.vue';

export default {
    name: "HomeView",
    components: {
        ItemCard
    },
    data() {
        return {
            cheapProducts: []
        };
    },
    created(){
        this.getCheapProducts();
    },
    methods: {
        getCheapProducts() {
            this.$store.dispatch(GET_PRODUCTS_CHEAP)
            .then((data) => {
                this.cheapProducts = data.products_cheap;
            })
            .catch(error => {
                console.error('Erro ao obter os produtos baratos:', error);
            });
        }
    }
}
</script>
