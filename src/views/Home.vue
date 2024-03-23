<template>
    <!-- Seção de produtos mais baratos -->
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <h1 class="font-bold text-3xl mb-4">Barato do dia</h1>
            <div class="flex flex-wrap -m-4">
                <ItemCard v-for="(item, index) in items" :key="item.id" :data="item"></ItemCard>
            </div>
        </div>
    </section>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue';

export default{
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
                },{
                    name: 'produto 2',
                    price: '19,52',
                    store: 'Mercado 2'
                },{
                    name: 'produto 3',
                    price: '5,22',
                    store: 'Mercado 3'
                },{
                    name: 'produto 4',
                    price: '6,01',
                    store: 'Mercado 4'
                }
            ]
        }
    },
}
</script>
