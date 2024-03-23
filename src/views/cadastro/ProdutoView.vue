<script setup>
</script>

<template>
    <div class="bg-white m-3 rounded-md overflow-hidden">
        <div class="bg-primary text-center">
            <span class="text-white">Cadastro de Produto</span>
        </div>
        <div class="m-3">
            <div class="mb-3">
                <button
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
        </div>
    </div>
</template>