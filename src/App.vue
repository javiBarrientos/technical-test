<template>
  <v-app>
    <div class="row d-flex">
      <div class="col-3"><sidebar-content-vue /></div>
      <div class="col-9"><main-content-vue /></div>
    </div>
  </v-app>
</template>

<script>
import MainContentVue from "./components/Main/MainContent.vue";
import SidebarContentVue from "./components/Sidebar/SidebarContent.vue";

export default {
  name: "App",
  components: { SidebarContentVue, MainContentVue },
  data: () => ({}),
};
</script>
