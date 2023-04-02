<template>
  <v-app>
    <v-row class="d-flex">
      <v-col cols="5" sm="5" md="3" lg="2"><sidebar-content-vue /></v-col>
      <v-col cols="7" sm="7" md="9" lg="10"><main-products-vue /></v-col>
    </v-row>
  </v-app>
</template>

<script>
import SidebarContentVue from "./components/Sidebar/SidebarContent.vue";
import MainProductsVue from "./components/Main/MainProducts.vue";

export default {
  name: "App",
  components: { SidebarContentVue, MainProductsVue },
  data: () => ({}),
};
</script>
