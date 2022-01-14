<template>
    <div class="app">
        <post-form @create="createPost"/>
        <post-list @remove="removePost" :posts="posts"/>
    </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default{
    components: {
        PostForm,
        PostList
    },
    data(){
        return{
            posts: [
                {
                    id: 1,
                    title: 'Javascript 1',
                    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque explicabo architecto officiis incidunt consequuntur eligendi aliquam labore at beatae fugiat sed adipisci, numquam fugit nesciunt mollitia aperiam sapiente officia perspiciatis. Adipisci cum porro mollitia sapiente."
                },
                {
                    id: 2,
                    title: 'Javascript 2',
                    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque explicabo architecto officiis incidunt consequuntur eligendi aliquam labore at beatae fugiat sed adipisci, numquam fugit nesciunt mollitia aperiam sapiente officia perspiciatis. Adipisci cum porro mollitia sapiente."
                },
                {
                    id: 3,
                    title: 'Javascript 3',
                    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque explicabo architecto officiis incidunt consequuntur eligendi aliquam labore at beatae fugiat sed adipisci, numquam fugit nesciunt mollitia aperiam sapiente officia perspiciatis. Adipisci cum porro mollitia sapiente."
                },
                {
                    id: 4,
                    title: 'Javascript 4',
                    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque explicabo architecto officiis incidunt consequuntur eligendi aliquam labore at beatae fugiat sed adipisci, numquam fugit nesciunt mollitia aperiam sapiente officia perspiciatis. Adipisci cum porro mollitia sapiente."
                }
            ],
        }
    },
    methods: {
       createPost(post){
           this.posts.push(post);
       },
       removePost(post){
           this.posts = this.posts.filter(p => p.id !== post.id);
       }
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
</style>