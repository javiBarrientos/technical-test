<template>
  <div>
    <v-list shaped>
      <v-subheader class="text-h6">Categories</v-subheader>
      <v-list-item-group v-model="categorieSelected" color="primary">
        <v-list-item v-for="category in categories" :key="category">
          <v-list-item-icon>
            <v-icon>mdi-filter</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-capitalize">
              {{ category }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    categorieSelected: null,
  }),
  computed: {
    ...mapGetters(["categories"]),
  },
  methods: {
    ...mapActions(["getCategories"]),
  },
  created() {
    this.getCategories();
  },
};
</script>

<style></style>
