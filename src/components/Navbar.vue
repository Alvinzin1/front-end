<template>
    <header class="text-gray-600 body-font border-b-2 border-primary sticky top-0 bg-white">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img class="ml-3" src="../assets/logo/svg/logo-no-background.svg" :style="{ height: '20px' }" />
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <router-link to="/" class="mr-5 hover:text-gray-900">Inicio</router-link>
                <router-link to="/about" class="mr-5 hover:text-gray-900">Produtos</router-link>
            </nav>
            <a href="/login"
                class="bg-primary text-white rounded inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
                Login
            </a>
            <a href="/cadastro"
                class="bg-primary text-white rounded inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
                Cadastre-se
            </a>
            <a href="/cadastro-loja"
                class="bg-primary text-white rounded inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
                <i class="fa fa-gear py-1 me-2"></i> Cadastro
            </a>
        </div>
    </header>
</template>

<script>
export default {

}
</script>
