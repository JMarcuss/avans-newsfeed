<template>
  <div>
    <v-app-bar flat color="#c6002a">
      <router-link to="/">
        <v-btn icon class="hidden-xs-only" color="white">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-row class="news-item">
      <v-col>
        <v-container>
          <v-row>
            <h2 class="center">{{ title }}</h2>
          </v-row>
          <v-row>
            <p class="center">{{ date }}</p>
          </v-row>
          <v-row>
            <p class="">{{ text }}</p>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "News",
  data: function () {
    return {
      title: "",
      date: "",
      text: "",
    };
  },
  mounted() {
    this.title = this.$route.params.data.title;
    this.date = this.$route.params.data.date;
    this.text = this.$route.params.data.text;
  },
};
</script>

<style scoped>
.news-item {
  height: 100%;
  min-height: 100%;
  padding: 2rem;
}
.left-block {
  background-color: #c6002a;
}

.center {
  margin: 0 auto;
}
</style>