<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
export default {
  name: "HeadNavigationView"
}
</script>

<style scoped>
a.lien-actif {
  border-bottom: 2px solid yellow;
  font-weight: bold;
}
</style>