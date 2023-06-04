import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref([])
  function change(array) {
    count.value= array
  }

  return { count,  change }
})