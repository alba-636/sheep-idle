<script lang="ts" setup>
import BigIntDisplay from '@/components/helpers/BigIntDisplay.vue'

defineProps<{
  count: bigint
}>()
</script>

<template>
  <div>Wool: <BigIntDisplay :value="count" animated /></div>
</template>
