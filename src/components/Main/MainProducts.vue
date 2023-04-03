<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card height="450" elevation="5">
          <v-img height="300" :src="product.image"></v-img>
          <v-card-title
            class="d-inline-block text-truncate"
            style="max-width: 100%"
            >{{ product.title }}</v-card-title
          >
          <v-card-subtitle>{{ product.price }} €</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  created() {
    this.getProducts();
  },
};
</script>
