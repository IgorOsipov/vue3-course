<template>
    <div v-if="posts.length > 0">
        <h1>List of Posts</h1>
        <div class="posts">
            <post-item 
                v-for="post in posts" 
                :key="post.id" 
                :post="post"
                @remove="$emit('remove', post)"
            />
        </div>
    </div>
    <h1
        style="color: red"
        v-else
    >
        There are no posts yet. Create the first
    </h1>
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