<template>
    <div class="lg:w-1/4 md:w-1/2 w-full p-2" role="button">
        <a class="block h-48 rounded-t-md overflow-hidden border-l border-t border-r">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
        </a>
        <div class="bg-white rounded-b-md p-3 border-l border-b border-r">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ data.store }}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">{{ data.name }}</h2>
            <p class="mt-1">R${{ data.price }}</p>
        </div>
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
