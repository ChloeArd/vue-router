<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <router-link
              v-for="menu in menus"
              :key="menu.id"
              :to="{
              name: 'menu.show',
              params: {id: menu.id, slug: menu.slug}
            }"
          >
            <li class="nav-item">{{ menu.name }} | &nbsp; </li>
          </router-link>
          <li class="nav-item">
            <router-link class=" navbar-brand" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class=" navbar-brand" to="/">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" to="/menu-mc-burger">Mcdo</router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" to="/menu-kfc-burger">KFC</router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" to="/menu-bk-burger">Burger King</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
a.lien-actif {
  border-bottom: 2px solid yellow;
  font-weight: bold;
}

ul.navbar-nav a {
  color: gray;
  text-decoration: none;
}
a.router-link-active li {
  color: white;
}
</style>