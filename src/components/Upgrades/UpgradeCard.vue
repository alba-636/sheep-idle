<script setup lang="ts">
defineProps<{
  name: string
  level: bigint
  cost: bigint
}>()
</script>

<template>
  <div class="upgrade_container">
    <div class="upgrade_name">{{ name }}</div>
    <div class="upgrade_level">Level: {{ level }}</div>
    <div class="upgrade_cost">Cost: {{ cost }}</div>
  </div>
</template>

<style scoped></style>
