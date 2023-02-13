<template>
  <HeadNavigation/>

    <router-view v-slot="{Component}">
      <transition :name="slide-fade">
        <component :is="Component" :key="$route.path"></component>
      </transition>

    </router-view>

  <router-view/>
</template>

<script>

import HeadNavigation from "@/components/HeadNavigation.vue";

export default {
  name: 'App',
  components: {
    HeadNavigation

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1,0.5,0.8,1);
}

.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

nav {
  padding: 30px;
}
</style>
