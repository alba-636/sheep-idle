<script setup lang="ts">
import UpgradeCard from './UpgradeCard.vue'
import { useUpgradeStore } from '@/stores/upgrades'

const upgradeStore = useUpgradeStore()
</script>

<template>
  <div class="upgradeList_container">
    <UpgradeCard
      v-for="upgrade in upgradeStore.upgrades"
      :key="upgrade.id"
      :id="upgrade.id"
      :level="upgrade.level"
      :cost="upgrade.cost"
    />
  </div>
</template>

<style scoped lang="scss">
.upgradeList_container {
  height: 100%;
  overflow-y: auto;
}
</style>
