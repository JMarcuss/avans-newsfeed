<template>
  <v-card class="mx-auto overflow-hidden">
    <v-app-bar color="#c6002a">
      <v-app-bar-nav-icon
        @click="drawer = true"
        color="white"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              ><router-link to="/">Home</router-link></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>logout </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <Newsfeed />
  </v-card>
</template>

<script>
import Newsfeed from "./Newsfeed";

export default {
  name: "Home",
  data: () => ({
    drawer: false,
    group: null,
  }),
  components: {
    Newsfeed,
  },
  mounted() {
    console.log(this.$di.users.test());
  },
};
</script>

<style scoped>
</style>