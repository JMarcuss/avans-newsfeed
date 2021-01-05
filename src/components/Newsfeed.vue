<template>
  <div class="main_block">
    <div v-for="n in news" :key="n.title">
      <NewsfeedItem
        v-on:click.native="click(n)"
        :title="n.title"
        :date="n.date"
        :text="n.text"
        :total="n"
        style="cursor: pointer"
      />
    </div>
  </div>
</template>

<script>
import NewsfeedItem from "../components/NewsfeedItem";
import json from "../../news.json";
export default {
  name: "Newsfeed",
  components: {
    NewsfeedItem,
  },
  data: function () {
    return {
      news: json.news,
    };
  },
  methods: {
    click: function (json) {
      this.$router.replace({ name: "News", params: { data: json } });
    },

    fetchNewsItemsPerUser (id) {
      fetch("https://julesmarcus.nl/api/newsfeed/" + id)
      .then (response => {
        if(response.ok) {
          return response.json()
        } else {
          alert("Server returned" + response.status + " : " + response.statusText);
        }
      })
      .then(data => {
        console.log(data)
        this.news = data
        this.responseAvailable == true;
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
    mounted() {
      this.fetchNewsItemsPerUser(1);
    }
};
</script>

<style scoped>
.main_block {
  min-height: 85vh;
}
</style>