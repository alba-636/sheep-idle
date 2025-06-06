<script lang="ts" setup>
import NumberAnimated from '@/components/helpers/NumberAnimated.vue'
import { computed } from 'vue'

const props = defineProps<{
  value: bigint
  animated?: boolean
}>()

type NumberScientificAnotation = {
  a: number
  aBis: number
  b: number
}

function numberToScientificAnotation(value: bigint): NumberScientificAnotation {
  const a = Number(value.toString().slice(0, 1))
  const aBis = Number(value.toString().slice(1, 4))
  const b = value.toString().length - 1

  return { a, aBis, b }
}

const valueScientificAnotation = computed(() => numberToScientificAnotation(props.value))
const disabledAnimation = computed(() => props.animated !== true)
const useScientificAnotation = computed(() => props.value >= 1_000)
</script>

<template>
  <!-- Value in Scientific Anotation -->
  <span v-if="useScientificAnotation">
    <NumberAnimated :disabled-animation="disabledAnimation" :value="valueScientificAnotation.a" />
    <span>.</span>
    <NumberAnimated
      :disabled-animation="disabledAnimation"
      :value="valueScientificAnotation.aBis"
    />
    <span>e</span>
    <NumberAnimated :disabled-animation="disabledAnimation" :value="valueScientificAnotation.b" />
  </span>

  <!-- Value Full -->
  <span v-else>
    <NumberAnimated :disabled-animation="disabledAnimation" :value="Number(value)" />
  </span>
</template>
