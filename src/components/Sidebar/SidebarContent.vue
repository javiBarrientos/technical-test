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
            <v-list-item-title
              class="text-capitalize"
              @click="categoryFilter(category)"
            >
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
    ...mapGetters(["categories", "category"]),
  },
  methods: {
    ...mapActions(["getCategories", "getCategory"]),

    categoryFilter(category) {
      let lastCategory = category;

      if (lastCategory == this.category) {
        return this.getCategory();
      } else {
        return this.getCategory(category);
      }
    },
  },
  created() {
    this.getCategories();
  },
};
</script>
