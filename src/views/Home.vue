<template>
    <!-- Seção de produtos mais baratos -->
    <section class="text-gray-600 body-font  mt-5">
        <div class="container mx-auto mb-5">
            <div class="bg-primary rounded-lg mb-1 px-3">
                <span class="font-bold text-1xl text-white">Promoções do dia</span>
            </div>
            <div class="flex flex-wrap">
                <ItemCard v-for="(item, index) in items" :key="item.id" :data="item"></ItemCard>
            </div>
        </div>

        <div class="container mx-auto">
            <div class="bg-primary rounded-lg mb-1 px-3">
                <span class="font-bold text-1xl text-white">Mais vendidos</span>
            </div>
            <div class="flex flex-wrap">
                <ItemCard v-for="(item, index) in items" :key="item.id" :data="item"></ItemCard>
            </div>
        </div>
    </section>

    <div class="fixed bottom-0 right-0">
        <div class="rounded-full bg-dark m-3 flex" :style="{ height: '60px', width: '60px' }">
            <i class="fa-solid fa-cart-shopping m-auto text-white text-2x1"></i>
        </div>
    </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue';

export default {
    name: "HomeView",
    components: {
        ItemCard
    },
    data() {
        return {
            items: [
                {
                    name: 'produto 1',
                    price: '9,32',
                    store: 'Mercado 1'
                }, {
                    name: 'produto 2',
                    price: '19,52',
                    store: 'Mercado 2'
                }, {
                    name: 'produto 3',
                    price: '5,22',
                    store: 'Mercado 3'
                }, {
                    name: 'produto 4',
                    price: '6,01',
                    store: 'Mercado 4'
                }
            ]
        }
    },
}
</script>
