<template>
    <div class="flex-flow">
        <v-row>
            <v-col class="left-block"></v-col>
            <v-col>
                <v-container>
                    <v-row>
                        <h2 class="center">{{title}}</h2>
                    </v-row>
                    <v-row>
                        <p class="center">{{date}}</p>
                    </v-row>
                    <v-row>
                        <p class="">{{text}}</p>
                    </v-row>
                </v-container>
            </v-col>
            <v-col>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "News",
    data: function(){
        return{
            title:'',
            date:'',
            text: ''
        }
    },
    mounted(){
        this.title = this.$route.params.data.title;
        this.date = this.$route.params.data.date;
        this.text = this.$route.params.data.text;
    }
}
</script>

<style scoped>
.flex-flow{
	height: 100%;
    min-height: 100%;
	display: flex;
	flex-direction: column;
}
.left-block{
    background-color: #C6002A;
  }

.center{
    margin: 0 auto;
}  
</style>