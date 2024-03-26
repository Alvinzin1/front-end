<template>
  <div class="bg-white m-3 rounded-md overflow-hidden">
    <div class="bg-primary text-center">
      <span class="text-white">Loja</span>
    </div>
    <div class="m-3">
      <div class="mb-3 flex">
        <router-link
          to="/lojas"
          class="bg-primary text-white rounded inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0"
        >
          <i class="fa-solid fa-left-long mr-1"></i> Voltar para suas lojas
        </router-link>
        <button
          @click="setInsert"
          class="bg-primary text-white rounded inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0"
        >
          <i class="fa fa-plus py-1 mr-1"></i> Adicionar novo produto
        </button>
      </div>
      <div class="border-l border-r border-t rounded">
        <table class="border-collapse table-fixed w-full text-sm">
          <thead class="">
            <tr>
              <th
                class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-left"
              >
                Nome
              </th>
              <th
                class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-left"
              >
                Preço
              </th>
              <th
                class="border-b dark:border-slate-600 font-medium p-3 dark:text-slate-200 text-center"
              >
                Ação
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <tr v-for="product in products" :key="product.id">
              <td
                class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"
              >
                {{ product.name }}
              </td>
              <td
                class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"
              >
                {{ product.price }}
              </td>
              <td
                class="text-center text-white flex gap-1 p-4 items-center justify-center"
              >
                <button
                  class="border px-2 py-1 rounded bg-primary"
                  title="Atualizar Loja"
                  @click="setUpdate(product)"
                >
                  <i class="fa fa-edit"></i>
                </button>
                <button
                  class="border px-2 py-1 rounded bg-primary"
                  title="Excluir Loja"
                  @click="setDelete(product.id)"
                >
                  <i class="fa fa-x"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div ref="modalDOM" class="hidden">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <div
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-primary text-center">
                <span class="text-white">Inserir</span>
              </div>
              <form
                class="space-y-4 md:space-y-6"
                @submit.prevent="submitform"
                ref="form"
              >
                <div class="bg-white p-3">
                  <div class="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-6">
                    <div class="col-span-12">
                      <label
                        for="name"
                        class="block text-sm font-medium leading-6 text-gray-900 my-1"
                        >Nome do produto</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        v-model="formModel.name"
                        class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="col-span-12">
                      <label
                        for="price"
                        class="block text-sm font-medium leading-6 text-gray-900 my-1"
                        >Preço</label
                      >
                      <input
                        type="text"
                        name="price"
                        id="price"
                        v-model="formModel.price"
                        class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mt-4"
                  >
                    <div class="col-span-12">
                      <input
                        type="text"
                        v-model="newCategoryName"
                        placeholder="Nova categoria"
                        class="rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <button
                        @click="addNewCategory" type="button"
                        class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                      >
                        Adicionar
                      </button>
                      <div
                        v-for="(category, index) in categories"
                        :key="index"
                        class="my-4"
                      >
                        <input
                          type="checkbox"
                          :checked="isCategoryChecked(category.id)"
                          class="mr-2"
                          @change="onChangeCategory(category, $event.target.checked)"
                        />
                        <label :for="'category_' + index" class="font-normal">{{
                          category.name
                        }}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-gray-50 p-2 sm:flex sm:flex-row-reverse border-t"
                >
                  <button
                    type="submit"
                    class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                  >
                    Salvar
                  </button>
                  <button
                    type="button"
                    @click="toggleModal"
                    class="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  STORE as PRODUCT_STORE,
  UPDATE as PRODUCT_UPDATE,
  DELETE as PRODUCT_DELETE,
  GET_PRODUCTS_BY_STORE,
} from "@/store/products/actions.type";
import {
  STORE as CATEGORY_STORE,
  GET_CATEGORIES_ALL,
} from "@/store/categories/actions.type";

export default {
  data() {
    return {
      modal: null,
      newCategoryName: null,
      products: [],
      categories: [],
      formModel: {
        name: "",
        price: null,
        store_id: this.storeId,
        categories: [],
      },
    };
  },
  created() {
    this.getProductsByStore();
    this.getAllCategories();
  },
  mounted() {
    this.modal = this.$refs.modal;
  },
  props: {
    storeId: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleModal() {
      if (this.$refs.modalDOM) {
        this.$refs.modalDOM.classList.toggle("hidden");
      }
    },
    getProductsByStore() {
      this.$store
        .dispatch(GET_PRODUCTS_BY_STORE, this.storeId)
        .then((data) => {
          this.products = data.products;
        })
        .catch((error) => {
          console.error("Erro ao obter os produtos da loja:", error);
        });
    },
    getAllCategories() {
      this.$store
        .dispatch(GET_CATEGORIES_ALL)
        .then((data) => {
          this.categories = data.categories;
        })
        .catch((error) => {
          console.error("Erro ao obter os produtos baratos:", error);
        });
    },
    insert() {
      this.$store
        .dispatch(PRODUCT_STORE, { ...this.formModel })
        .then(() => {
          this.toggleModal();
          this.getProductsByStore();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    update() {
      this.$store
        .dispatch(PRODUCT_UPDATE, { ...this.formModel })
        .then(() => {
          this.toggleModal();
          this.getProductsByStore();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    delete(id) {
      this.$store
        .dispatch(PRODUCT_DELETE, id)
        .then(() => {
          this.getProductsByStore();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    submitform() {
      if (this.formModel.id) {
        this.update();
      } else {
        this.insert();
      }
    },
    setInsert() {
      this.$refs.form.reset();
      this.formModel.id = null;
      this.toggleModal();
    },
    setUpdate(product) {
      const { id, name, price, categories } = product;
      this.formModel.id = id;
      this.formModel.name = name;
      this.formModel.price = price;
      this.formModel.categories = categories.map(e => e['id']);
      this.toggleModal();
    },
    setDelete(id) {
      confirm("Você deseja deletar realmente?") && this.delete(id);
    },
    isCategoryChecked(categoryId) {
        return this.formModel.categories.some(id => id == categoryId);
    },
    addNewCategory() {
      // Verificar se já existe uma categoria com o mesmo nome
        const existingCategory = this.categories.find(category => category.name === this.newCategoryName);
        if (existingCategory) {
            alert('Categoria já existe:');
            return;
        }

        // Se a categoria não existe, adicione-a
        this.$store
            .dispatch(CATEGORY_STORE, { name: this.newCategoryName })
            .then(() => {
                this.getAllCategories();
            })
            .catch((error) => {
                console.error("Erro ao criar a nova categoria:", error);
            });
    },
    onChangeCategory(category, status){
        console.log(status);
        if (status) {
            this.formModel.categories.push(category.id);
        }else{
            let index = this.formModel.categories.findIndex(e => e == category.id);
            console.log(index);
            this.formModel.categories.splice(index, 1);
        }
    }
  },
};
</script>
