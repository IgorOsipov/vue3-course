<template>
    <div class="app">
        <h1>POSTS</h1>
        <div class="app__btns">
            <my-button 
                class="add_post_btn"
                @click="showDialog"
            >
                Add Post
            </my-button>
            <my-input
                class="post__search"
                v-model="searchQuery"
                placeholder="Search"
            />
            <my-select 
                v-model="selectedSort"
                :options="sortOptions"
                class="select" 
            />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list 
            @remove="removePost" 
            :posts="sortedAndSearchedPosts"
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
import axios from 'axios';

export default{
    components: {
        PostForm,
        PostList,
    },
    data(){
        return{
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            sortOptions: [
                {value: 'title', name: 'By Title'},
                {value: 'body', name: 'By Body'},
            ],
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
    },
    computed: {
        sortedPosts(){
            return [...this.posts].sort((p1, p2) => p1[this.selectedSort]?.localeCompare(p2[this.selectedSort]))
        },
        sortedAndSearchedPosts(){
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
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

.app__btns{
    display: flex;
    justify-content: space-between;
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

.select{
    margin-top: 15px;
    margin-bottom: 15px;
}

.post__search{
    max-width: 50%;
    margin-top: 15px;
    margin-bottom: 15px;
}
</style>