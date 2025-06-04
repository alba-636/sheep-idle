import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWoolCounterStore = defineStore('woolCounter', () => {
  const woolCount = ref<bigint>(BigInt(0))
  const woolProductionRate = ref<bigint>(BigInt(1)) // Production by seconds.

  function setWoolCount(value: bigint) {
    woolCount.value = value
  }

  function setWoolProductionRate(value: bigint) {
    woolProductionRate.value = value
  }

  return {
    woolCount,
    woolProductionRate,

    setWoolCount,
    setWoolProductionRate,
  }
})
