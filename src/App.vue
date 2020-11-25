<template>
  <v-app style="background-color: #c6002a">
    <div class="">
      <v-img
        class="shrink mr-2 img"
        contain
        :src="require('./assets/logo-white.png')"
        transition="scale-transition"
        height="40"
        v-on:click.native="goHome()"
      />
    </div>
    <v-main class="wrapper">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    goHome: function () {
      this.$router.replace({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.img {
  float: right;
  margin-top: 2rem;
  cursor: pointer;
}

.wrapper {
  width: 35rem;
  height: 50rem;
  margin: 10rem auto;
  overflow: scroll;
  background-color: white;
  border-radius: 1.5rem;
  display: block;
  border: solid 2px white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#app {
  font-family: Arial, Helvetica, sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>