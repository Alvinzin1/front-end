<template>
    <div class="lg:w-1/4 md:w-1/2 w-full p-2" role="button">
        <router-link :to="{ name: 'ProductsShow', params: { productId: data.id } }">
            <div class="block h-48 rounded-t-md overflow-hidden border-l border-t border-r">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
            </div>
            <div class="bg-white rounded-b-md p-3 border-l border-b border-r">
                <span v-for="category in data.categories" :key="category.id" class="bg-primary text-light text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                    {{ category.name }}
                </span>
                <h3 class="text-gray-500 text-xs tracking-widest title-font my-1">{{ data.store.name }}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">{{ data.name }}</h2>
                <p class="mt-1">R${{ data.price }}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>
