<template>
    <div v-if="posts.length > 0">
        <h2>List of Posts</h2>
        <div class="posts">
            <transition-group name="list">
                <post-item 
                    v-for="post in posts" 
                    :key="post.id" 
                    :post="post"
                    @remove="$emit('remove', post)"
                />
            </transition-group>
        </div>
    </div>
    <h2
        style="color: red"
        v-else
    >
        There are no posts yet. Create the first
    </h2>
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

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all .4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.list-move {
  transition: transform .4s ease;
}

</style>