<template>
  <div>
    <h2>{{ ingredient.name }}</h2>
    <BackComponent />
    <img :src="`/images/${ingredient.image}`" :alt="ingredient.name">
    <p>{{ ingredient.description }}</p>
  </div>
</template>

<script>
import menuData from "@/data.json";
import BackComponent from "@/components/BackComponent.vue";

export default {
  name: "IngredientView",
  props: {
    id: {type: Number,
    required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    menu() {
      return menuData.menus.find(menu => menu.id === this.id);
    },
    ingredient() {
      return this.menu.ingredients.find(ingredient => ingredient.slug === this.slug);
    }
  },
  components: {BackComponent}
}
</script>

<style scoped>

</style>