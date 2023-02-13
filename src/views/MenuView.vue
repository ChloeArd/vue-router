<template>
  <div>
    <h2>{{ menu.name }}</h2>
    <BackComponent />
    <div>
      <img :src="`/images/${menu.image}`" :alt="menu.name">
      <p>{{ menu.description }}</p>
    </div>
  </div>

  <div class="ingredients">
    <router-link v-for="ingredient in menu.ingredients" :key="ingredient.slug" :to="{name: 'ingredient.show', params: {id: menu.id, slug: ingredient.slug}}">
      <IngredientList :ingredient="ingredient" />
    </router-link>
  </div>

</template>

<script>
import menuData from "@/data.json";
import IngredientList from "@/components/IngredientList.vue";
import BackComponent from "@/components/BackComponent.vue";
export default {
  name: "MenuView",
  props: {
    id: {type: Number, required: true}
  },
  computed: {
    // menuId() {
    //   return parseInt(this.$route.params.id);
    // },
    menu() {
      return menuData.menus.find(menu => menu.id === this.id);
    }
  },
  components: {
    BackComponent,
    IngredientList
  }

}
</script>

<style scoped>
.ingredients {
  display:  inline-flex;
}
</style>