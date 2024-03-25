<template>
    <section>
        <div class="flex flex-col items-center justify-center px-6 pt-64 mx-auto">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Cadastra-se
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.stop.prevent="registerForm">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nome</label>
                            <input type="name" name="name" id="name" v-model="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email</label>
                            <input type="email" name="email" id="email" v-model="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" v-model="password"
                                class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Cadastra-se
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { REGISTER } from '@/store/auth/actions.type';

export default {
    name: "Register",
    data() {
        return {
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        registerForm() {
            // Enviar dados de login para o backend Laravel
            this.$store.dispatch(REGISTER, {
                name: this.name,
                email: this.email,
                password: this.password
            }).then(() => {
                this.$router.push('/');
            }).catch(error => {
                // Tratar erros de autenticação, exibir mensagens de erro, etc.
                console.error(error);
            });
        }
    }
}
</script>
