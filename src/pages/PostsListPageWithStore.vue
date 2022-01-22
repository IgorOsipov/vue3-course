<template>
    <div>
        <h1>POSTS (Store)</h1>
        <div class="app__btns">
            <my-button 
                class="add_post_btn"
                @click="showDialog"
            >
                Add Post
            </my-button>
            <my-input
                class="post__search"
                placeholder="Search"
                :model-value="searchQuery"
                @update:model-value = "setSearchQuery"
            />
            <my-select 
                :model-value = "selectedSort"
                @update:model-value = "setSelectedSort"
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
        >
            Loading...
        </div>
        <div v-intersection="loadedMorePosts" class="observer"></div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

export default{
    components: {
        PostForm,
        PostList
    },
    data(){
        return{
            dialogVisible: false,
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            fetchPosts: 'post/fetchPosts',
            loadedMorePosts: 'post/loadedMorePosts'
        }),
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
    },
    mounted(){
        this.fetchPosts();
    },
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        })
    },
}
</script>

<style>
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

.page__wrapper{
    display: flex;
    margin-top: 15px;
}

.page{
    border: 1px solid black;
    color: teal;
    padding: 10px;
    cursor: pointer;
}

.current__page{
    border: 2px solid teal;

}


</style>