<template>
        <form @submit.prevent>
            <h2>Add Post</h2>
            <my-input 
                v-focus
                v-model="post.title"
                placeholder="Name"
            />
            <my-input 
                v-model="post.body" 
                placeholder="Body"
            />
            <my-button 
                class="btn" 
                style="align-self: flex-end"
                @click="createPost"
            >
                Add
            </my-button>
        </form>
</template>

<script>
export default{
    data(){
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods:{
        createPost(){
           this.post.id = Date.now();
           this.$emit('create', this.post);
           this.post = {
               title: '',
               body: ''
           }
        }
    }
}
</script>


<style scoped>
form{
    display: flex;
    flex-direction: column;
}
</style>