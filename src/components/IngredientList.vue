<template>
  <div class="container">
    <div class="card" style="width: 18rem">
      <img :src="`/images/${ingredient.image}`" class="card-img-top" :alt="ingredient.name">
      <div class="card-body">
        <h5 class="card-title">{{ ingredient.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IngredientList",
  props: {
    ingredient: {type: Object, required: true}
  }
}
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}

.card {
  padding: 20px;
  margin-bottom: 15px
}
</style>