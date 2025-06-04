<script setup lang="ts">
import UpgradeHandler from '@/features/UpgradeHandler'
import { useWoolCounterStore } from '@/stores/woolCounter'
import { computed } from 'vue'

const props = defineProps<{
  id: string
  level: bigint
  cost: bigint
}>()

const woolCounterStore = useWoolCounterStore()
const canBeBought = computed(() => props.cost <= woolCounterStore.woolCount)

function buyUpgrade() {
  UpgradeHandler.instance.tryBuyUpgrade(props.id)
}
</script>

<template>
  <div class="upgrade_container">
    <!-- TODO: Local from id -->
    <div class="upgrade_name">{{ id }}</div>
    <div class="upgrade_level">Level: {{ level }}</div>
    <div class="upgrade_cost">Cost: {{ cost }}</div>

    <button :disabled="!canBeBought" @click="buyUpgrade">Buy</button>
  </div>
</template>

<style scoped>
.upgrade_container {
  margin: 8px;
  padding: 8px;
  border: solid 1px black;
  border-radius: 8px;
}
</style>
