<template>
    <div class="bg-white m-3 rounded-md overflow-hidden">
        <div class="bg-primary text-center">
            <span class="text-white">Meus Pedidos</span>
        </div>
        <div class="m-3">
            <div class="border-l border-r border-t rounded">
                <table class="border-collapse table-fixed w-full text-sm">
                    <thead class="">
                        <tr>
                            <th class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-left">
                                #</th>
                            <th class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-left">
                                Produto</th>
                            <th class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-left">
                                Quantidade</th>
                            <th class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-center">
                                Loja
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-slate-800">
                        <tr v-for="(request, index) in requests" :key="request.id">
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                {{ index + 1 }}
                            </td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                {{ request.product.name }}
                            </td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                {{ request.quantity }}
                            </td>
                            <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400 text-center">
                                {{ request.product.store.name }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { GET_REQUESTS_BY_USER } from '@/store/request/actions.type';

export default {
    data() {
        return {
            requests: [],
        };
    },
    created(){
        this.getRequestsByUser();
    },
    methods: {
        getRequestsByUser(){
            this.$store.dispatch(GET_REQUESTS_BY_USER)
            .then((data) => {
                this.requests = data.requests;
            })
            .catch(error => {
                console.error('Erro ao obter os produtos baratos:', error);
            });
        }
    }
}
</script>
