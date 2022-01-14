<template>
    <div class="posts">
        <post-item 
            v-for="post in posts" 
            :key="post.id" 
            :post="post"
            @remove="$emit('remove', post)"
        />
    </div>
</template>

<script>
import PostItem from './PostItem.vue'


export default{
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>


<style scoped>
.posts{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
</style>