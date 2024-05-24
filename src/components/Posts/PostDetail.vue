<template lang="">
  <div class="post">
    <h3>{{props.title}}</h3>
    <p>{{props.content}}</p>
    <input type="text" v-model="message">
    <button @click="handleClick()">Di hola</button>
  </div>
</template>

<script lang="ts" setup>
  import { type Ref, ref, defineProps, defineEmits } from 'vue';

  const props = defineProps({
    title: String,
    content: String
  })

  const emit = defineEmits(['sayHi'])

  const handleClick = () => {
    emit('sayHi', message.value)
  }
  
let message: Ref<string> = ref('')

  /**
    import { defineComponent, type Ref, ref } from 'vue';
    export default defineComponent({
      name: 'PostDetail',
      //?? Options API (vue2)
      props: {
        title: {
          type: String,
          required: true
        }, 
        content: {
          type: String,
          required: false,
          default: 'Sin contenido'
        }
      },
      emits: ["sayHi"],
      //?? Composition API (vue3) 
      setup(props, {emit}) {
        let message: Ref<string> = ref('')
        
        const handleClick = () => {
          emit("sayHi", message.value)
        }
        return{props, handleClick, message}
      }
    })
  */
</script>

<style>
  .post {
    width: 300px;
    /* height: 100px; */
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    color: black;
  }
</style>