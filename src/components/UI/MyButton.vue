<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn{
    padding: 5px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;  
    cursor: pointer;
}
.btn:hover{
    box-shadow: 0px 0px 8px 0px rgba(229, 229, 229, 1);
}
</style>
