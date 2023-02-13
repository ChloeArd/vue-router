<template>
  <div class="home">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <router-link
            v-for="menu in menus"
            :key="menu.id"
            :to="{
              name: 'menu.show',
              params: {id: menu.id, slug: menu.slug}
            }"
          >
            <div class="col">
              <div class="card shadow-sm">
                <img :src="`/images/${menu.image}`" width="420" height="225" >

                <div class="card-body">
                  <h3>Menu Burger</h3>
                </div>
              </div>
            </div>
          </router-link>
        </div>
  </div>
</template>

<script>
import menuData from "../data.json";
console.log(menuData)
export default {
  data() {
    return {
      menus: menuData.menus
    }
  }
}
</script>

<style scoped>

</style>