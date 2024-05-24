<template lang="">
  <div>
    <h3>
      {{counter}}
    </h3>
    <button @click="addCounter">Incrementar</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CounterOptionsAPI",
  components: {},
  data() {
    let counter = 0;
    return { counter };
  },
  methods: {
    addCounter() {
      this.counter++;
    },
  },
});
</script>
<style lang="">
</style>