<template>
    <div class="app">
        <my-button 
            class="add_post_btn"
            @click="showDialog"
        >
            Add Post
        </my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list 
            @remove="removePost" 
            :posts="posts"
            v-if="!isPostsLoading"
        />
        <div
            v-else
        >Loading...</div>
    </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import MyButton from './components/UI/MyButton.vue';
import MyDialog from './components/UI/MyDialog.vue';
import axios from 'axios';

export default{
    components: {
        PostForm,
        PostList,
        MyDialog,
        MyButton
    },
    data(){
        return{
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
        }
    },
    methods: {
       createPost(post){
           this.posts.push(post);
           this.dialogVisible = false;
       },
       removePost(post){
           this.posts = this.posts.filter(p => p.id !== post.id);
       },
       showDialog(){
           this.dialogVisible = true;
       },
       async fetchPosts(){
           try {
                this.isPostsLoading = true;
                const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = responce.data;
           } catch (error) {
               console.log(error)
           }finally{
                this.isPostsLoading = false;
           }
       }
    },
    mounted(){
        this.fetchPosts();
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app{
   padding: 20px;
}

form{
    display: flex;
    flex-direction: column;
}

.input{
    width: 100%;
    border: 1px solid teal;
    padding: 5px 10px;
    margin-top: 10px;
}

.btn{
    margin-top: 15px;
    padding: 5px 10px;
    align-self: flex-end;  
    background: none;
    color: teal;
    border: 1px solid teal;  
}

.add_post_btn{
    margin-bottom: 15px;
}
</style>