<template lang="">
  <div>
    <h3>
      {{counter}}
    </h3>
    <button @click="addCounter">Incrementar</button>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
let counter: Ref = ref(0);
const addCounter = (): void => {
  counter.value++;
};

//?? Without setup on script
// import { defineComponent, ref, Ref } from "vue";
// export default defineComponent({
//   name: "CounterCompositionAPI",
//   setup() {
//     let counter: Ref = ref(0);
//     const addCounter = (): void => {
//       counter.value++;
//     };
//     return { counter, addCounter };
//   },
// });
</script>
<style lang="">
</style>