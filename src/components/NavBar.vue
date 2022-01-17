<template>
  <div class="navbar">
      <div
        @click="$router.push('/')"
        style="cursor: pointer"
      >
        VUE 3
      </div>
      <div class="navbar__btns">
          <my-button 
            @click="$router.push('/posts')"
          >
            Posts
          </my-button>
          <my-button 
            @click="$router.push('/about')" 
            style="margin-left: 5px"
          >
            About
          </my-button>
      </div>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default {
  components: { MyButton },

}
</script>

<style scoped>
.navbar{
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__btns{
    display: flex;
    align-items: center;
    margin-left: auto;
}
</style>