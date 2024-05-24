<template>
  <div class="post-card">
    <h3>Titulo</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
      perspiciatis eos! Quis numquam commodi vitae repudiandae eveniet. Dolor id
      iure earum adipisci, ratione nihil doloribus est ab veniam. In?
    </p>
    <PostButton />
  </div>
</template>

<script lang="ts" setup>
import PostButton from "./PostButton.vue";
</script>

<style>
.post-card {
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
}
</style>