<template>
  <div class="container">
    <template v-for="(item, index) in info" :key="index">
      <PostDetail :title="item.title" :content="item.content" @sayHi="showAlert" />
    </template>
  </div>
</template>
<script setup lang="ts">
import PostDetail from './PostDetail.vue';
interface IPost {
  title: string,
  content: string
}
let info: Array<IPost> = [
  {
    title: 'Post 1',
    content: 'Contenido 1',
  },
  {
    title: 'Post 2',
    content: 'Contenido 2',
  },
  {
    title: 'Post 3',
    content: 'Contenido 3',
  },
  {
    title: 'Post 4',
    content: 'Contenido 4',
  },
  {
    title: 'Post 5',
    content: 'Contenido 5',
  },
]
function showAlert(msg:string) {
  alert(msg)
}
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
}
</style>