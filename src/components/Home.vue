<template>
    <v-row>
        <v-col class="left-block"></v-col>
        <v-col><Newsfeed/></v-col>
        <v-col>
        </v-col>
    </v-row>
</template>

<script>
import Newsfeed from './Newsfeed';

export default {
    name: "Home",
    components: {
        Newsfeed,
    },
    mounted(){
        console.log(this.$di.users.test())
    }
}
</script>

<style scoped>
 .left-block{
    background-color: #C6002A;
  }
</style>