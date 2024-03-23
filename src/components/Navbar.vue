<template>
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="ml-3 text-xl">Desafio - Mercadinhos</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <router-link to="/" class="mr-5 hover:text-gray-900" >Inicio</router-link>
            <router-link to="/about" class="mr-5 hover:text-gray-900" >Produtos</router-link>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login
        </button>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Cadastre-se
        </button>
    </div>
    </header>
</template>

<script>
export default {
    
}
</script>
