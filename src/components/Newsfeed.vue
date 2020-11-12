<template>
    <div class="main_block">
        <div v-for="n in news" :key="n.title">
             <NewsfeedItem v-on:click.native="click(n)" :title="n.title" :date="n.date" :text="n.text" :total="n"/>
        </div>
    </div>
</template>

<script>
import NewsfeedItem from '../components/NewsfeedItem';
import json from '../../news.json'
export default {
    name: "Newsfeed",
    components: {
        NewsfeedItem,
    },
    data: function(){
        return{
            news : json.news
        }
    },
    methods: {
        click: function(json){
            this.$router.replace({name : 'News', params: {data : json}})
        }
    }
}
</script>

<style scoped>
    .main_block{
        width: 30vw;
        min-height: 85vh;
    }
</style>