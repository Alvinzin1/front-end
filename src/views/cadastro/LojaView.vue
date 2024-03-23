<script setup>
import { ref } from 'vue';

const modalDOM = ref(null);

function toggleModal() {
    modalDOM.value.classList.toggle('hidden')
}
</script>

<template>
    <div class="bg-white m-3 rounded-md overflow-hidden">
        <div class="bg-primary text-center">
            <span class="text-white">Cadastro de loja</span>
        </div>
        <div class="m-3">
            <div class="mb-3">
                <button @click="toggleModal"
                    class="bg-primary text-white rounded inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
                    <i class="fa fa-plus py-1"></i>
                </button>
            </div>
            <div class="border-l border-r border-t rounded">
                <table class="border-collapse table-fixed w-full text-sm">
                    <thead class="">
                        <tr>
                            <th class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-left">
                                Song</th>
                            <th class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-left">
                                Artist</th>
                            <th class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-left">
                                Year</th>
                            <th class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-center w-20">
                                Ação
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-slate-800">
                        <tr v-for="i in 200">
                            <td
                                class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td
                                class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                Malcolm Lockyer</td>
                            <td
                                class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                1961</td>
                            <td class="text-center">
                                <button class="border px-2 py-1 rounded bg-primary me-2">
                                    <i class="fa fa-edit text-white"></i>
                                </button>
                                <button class="border px-2 py-1 rounded bg-primary ">
                                    <i class="fa fa-x text-white"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div ref="modalDOM" class="hidden">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div
                            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-primary text-center">
                                <span class="text-white">Inserir</span>
                            </div>
                            <div class="bg-white p-3">
                                <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-3" v-for="i in 10">
                                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">
                                            First name</label>
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-2 sm:flex sm:flex-row-reverse border-t">
                                <button type="button"
                                    class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">Salvar</button>
                                <button type="button" @click="toggleModal"
                                    class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>