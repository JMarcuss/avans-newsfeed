<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark>
    <router-link to="/">Home</router-link>
      <v-spacer></v-spacer>
        <div class="d-flex">
          <v-img
            class="shrink mr-2 img"
            contain
            :src="require('./assets/avans_logo.png')"
            transition="scale-transition"
            height="40"
            v-on:click.native="goHome()"/>
      </div>
    </v-app-bar>
    <v-main>
      <transition
        name="fade"
        mode="out-in">
        <router-view/>
      </transition>
    </v-main>
  </v-app> 
</template>

<script>
export default {
  name: 'App',
  methods: {
      goHome: function(){
          this.$router.replace({name : 'Home'})
      }
  }
};
</script>

<style scoped>
.img {
  float:right;
}

#app{
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
  opacity: 0
}
</style>