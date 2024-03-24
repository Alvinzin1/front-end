<template>
    <header class="body-font border-b-2 border-primary text-primary-dark sticky w-full top-0 bg-light dark:bg-dark dark:text-light">
        <nav class="w-full">
            <div class="max-w-screen flex flex-wrap items-center justify-between mx-4 py-2 md:py-0.5">
                <img class="ml-3 h-8" src="../assets/logo/svg/logo-no-background.svg" />
                <button @click="toggleNavbar" id="menu" type="button" class="inline-flex items-center p-1 w-10 h-10 justify-center text-sm  rounded-lg md:hidden" aria-controls="navbar-multi-level" :aria-expanded="isNavbarOpen.toString()">
                    <span class="sr-only">Menu</span><i class="fa-solid fa-bars"></i>
                </button>
                <div :class="[isNavbarOpen ? 'block' : 'hidden']" class="w-full block md:flex md:flex-wrap md:items-center md:justify-between md:w-auto md:relative md:mt-0">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 gap-y-1 border border-indigo-100 rounded-lg bg-indigo-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-zinc-50 dark:bg-teal-800 md:dark:bg-dark dark:border-teal-700">
                        <li>
                            <router-link to="/" class="block py-2 px-3 text-light bg-secondary rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-white dark:bg-primary-dark md:dark:bg-transparent">Inicio</router-link>
                        </li>
                        <li>
                            <router-link to="/about" class="block py-2 px-3 text-light bg-secondary rounded md:bg-transparent md:text-primary md:p-0 md:dark:text-white dark:bg-primary-dark md:dark:bg-transparent">Catalogo</router-link>
                        </li>
                    </ul>
                    <div class="mx-2">
                            <input type="text" placeholder="Search..." class="border md:w-auto border-primary rounded-sm py-1 px-3 mx-1 focus:outline-none hover:bg-zinc-100 text-base mt-4 md:mt-0">
                            <button class="bg-primary text-white rounded inline-flex items-center border-0 py-2 px-3 mx-1 focus:outline-none text-base mt-4 md:mt-0">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                    </div>
                    <div class="w-full flex flex-wrap items-center justify-between md:w-auto">
                        <template v-if="!$store.getters.isAuthenticated">
                            <router-link to="/login" class="bg-primary w-1/2 text-white rounded inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0 md:w-auto">
                                Login
                            </router-link>
                            <router-link to="/cadastro" class="bg-primary w-1/2 text-white rounded inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0 md:w-auto">
                                Cadastre-se
                            </router-link>
                        </template>
                        <template v-else>
                            <div class="bg-primary w-1/2 text-white rounded inline-flex items-center border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0 md:w-auto">
                                R$ {{ userData.wallet }}
                            </div>
                            <!-- Botão do dropdown -->
                            <div class="w-1/2 md:w-auto relative ">
                                <button @click="toggleDropdown" id="menu" class="bg-primary w-full text-white rounded inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none text-base mt-4 md:mt-0">
                                {{ userData.name }} <i class="fa-solid fa-caret-down p-1"></i>
                                </button>
                                <!-- Dropdown -->
                                <div v-if="isDropdownOpen" class="inset-x-0 absolute w-full right-0 mt-2 mr-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div class="py-1 text-center" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <routerLink to="/cadastro-loja" class="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                            Cadastro de Loja
                                        </routerLink>
                                        <button @click="logout" class="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Logout</button>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                    <button id="theme-toggle" type="button" class="dark:text-light hover:bg-primary rounded-lg text-sm p-2.5 my-2 ml-0 md:ml-10" @click="toggleDarkMode">
                        <i :class="[isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon']"></i>
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { LOGOUT } from '@/store/auth/actions.type';
const USER_STORAGE = 'user';

export default {
    data() {
        return {
            isDarkMode: false,
            isNavbarOpen: false,
            isDropdownOpen: false,
            userData: null
        };
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
            document.body.classList.toggle('dark', this.isDarkMode);
            localStorage.setItem('darkMode', this.isDarkMode ? 'dark' : 'light');
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        closeDropdownOnClick(event) {
            // Verifica se o dropdown está aberto e se o clique não ocorreu dentro do menu
            if (this.isDropdownOpen && !event.target.closest('#menu')) {
                this.isDropdownOpen = false;
            }
        },
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        },
        closeNavbarOnClick(event) {
            // Verifica se o menu está aberto e se o clique não ocorreu dentro do menu
            if (this.isNavbarOpen && !event.target.closest('#menu')) {
                this.isNavbarOpen = false;
            }
        },
        logout() {
            // Chamar a action de logout do store
            this.$store.dispatch(LOGOUT)
            .then(() => {
                this.$router.push('/');
            })
            .catch(error => {
                console.error(error);
            });
        },
    },
    created() {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'dark') {
            this.toggleDarkMode();
        }
        // Carrega os dados do usuário do localStorage
        const userData = localStorage.select(USER_STORAGE);
        if (userData) {
            this.userData = userData;
        }
    },
    mounted() {
        document.addEventListener('click', this.closeDropdownOnClick);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.closeDropdownOnClick);
    },
}
</script>
