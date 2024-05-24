<template lang="">
  <div>
    <input v-model="product.name" type="text" />
    <input v-model="product.price" type="number" />
    <button @click="addToCart">Add to cart</button>
  </div>
  <ul>
    <li v-for="(product, index) in products" :key="index">
    <p>
      {{product.name}} | <span>{{product.price}}</span>
    </p>
    </li>
  </ul>
  <h3>
    Total price: {{totalPrice}}$
  </h3>
</template>

<script lang="ts" setup>

import { type Ref, ref, computed } from 'vue';
interface IProduct {
  name: string,
  price: number
}
let product: Ref<IProduct> = ref({
  name: '',
  price: 0
})
let products: Ref<Array<IProduct>> = ref([])

const addToCart = () => {
  products.value.push(product.value)
  product.value.name = ''
  product.value.price = 0
}
const totalPrice = computed(() => {
  let totalPrice = 0
  products.value.forEach(product => {
    totalPrice += product.price
  })
  return totalPrice
})
// let message: Ref<string> = ref('')
// const reverse = computed(():string => message.value.split('').reverse().join(''))


// import { defineComponent, type Ref, ref, computed } from 'vue';
// export default defineComponent({
//   name: 'ComputedExample',
//   setup() {
//     let message: Ref<string> = ref('')
//     const reverse = computed(():string => message.value.split('').reverse().join(''))
//     return {message, reverse}
//   }
// })

// import { defineComponent} from 'vue';
// export default defineComponent({
//   name: 'ComputedExample',
//   data() {
//     return {
//       message: ''
//     }
//   },
//   computed: {
//     reverse(): string {
//       return this.message.split('').reverse().join('')
//     }
//   }
// })
</script>

<style scoped>
  
</style>