<template>
    <div class="post">
        <div>
            <div><strong>Name:</strong> {{post.title}} </div>
            <div><strong>Body:</strong> {{post.body}} </div>  
        </div>
        <div class="post__btns">
            <my-button
                @click="$emit('remove', post)"
            >
                Delete
            </my-button>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            post:{
                type: Object,
                required: true,
            }
            
        }
    }
</script>


<style scoped>
.post{
    margin: 15px;
    padding: 15px;
    border: 2px solid teal;
    max-width: 300px;
    min-width: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
</style>