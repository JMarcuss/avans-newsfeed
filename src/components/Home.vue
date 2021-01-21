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
          <v-list-item @click="loadFeed(1), (drawer = false), (user = 1)">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>User 1 </v-list-item-title>
          </v-list-item>
          <v-list-item @click="loadFeed(2), (drawer = false), (user = 2)">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>User 2 </v-list-item-title>
          </v-list-item>
          <v-list-item @click="loadFeed(3), (drawer = false), (user = 3)">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>User 3 </v-list-item-title>
          </v-list-item>
          <v-list-item @click="loadFeed(4), (drawer = false), (user = 4)">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>User 4 </v-list-item-title>
          </v-list-item>
          <v-list-item @click="loadFeed(5), (drawer = false), (user = 5)">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>User 5 </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <h1 style="text-align: center; margin: 1rem">
      News feed for user {{ user }}
    </h1>
    <div class="wrapper">
      <h3>Categorie</h3>
      <div v-if="user == 1" class="category">
        <span>Recht en Bestuur</span>
        <span>Jaar 1</span>
        <span>Roosendaal</span>
      </div>
      <div v-if="user == 2" class="category">
        <span>Gedrag en Maatschappij</span>
        <span>Jaar 1</span>
        <span>Tilburg</span>
      </div>
      <div v-if="user == 3" class="category">
        <span>Economie en Bedrijf</span>
        <span>Jaar 2</span>
        <span>s-Hertogenbosch</span>
      </div>
      <div v-if="user == 4" class="category">
        <span>Techniek</span>
        <span>Jaar 1</span>
        <span>Breda</span>
      </div>
      <div v-if="user == 5" class="category">
        <span>Taal en Communicatie</span>
        <span>Jaar 3</span>
        <span>s-Hertogenbosch</span>
      </div>
    </div>
    <Newsfeed ref="feed" />
  </v-card>
</template>

<script>
import Newsfeed from "./Newsfeed";

export default {
  name: "Home",
  data: () => ({
    drawer: false,
    group: null,
    user: 1,
  }),
  components: {
    Newsfeed,
  },
  methods: {
    loadFeed(id) {
      this.$refs.feed.fetchNewsItemsPerUser(id);
    },
  },
  mounted() {
    console.log(this.$di.users.test());
  },
};
</script>

<style scoped>
.wrapper {
  padding: 1rem;
  background-color: #d3d3d3;
  margin-bottom: 1rem;
}
h3 {
  text-align: center;
  margin-bottom: 1rem;
}
.category {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;

}
</style>