<template>
    <div class="newsitem">
        <v-card elevation="2">
            <v-card-title>{{title}}</v-card-title>
            <v-card-subtitle>{{date}}</v-card-subtitle>
            <v-card-text class="text-cutoff">{{text}}</v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "NewsfeedItem",
    props: ["title", "date", "text", "total"]
}
</script>

<style scoped>
    .newsitem{
        width: 100%;
        padding: 10px
    }
    .text-cutoff{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>