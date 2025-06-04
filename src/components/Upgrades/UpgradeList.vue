<script setup lang="ts">
import UpgradeCard from './UpgradeCard.vue'
import { useUpgradeStore } from '@/stores/upgrades'

const upgradeStore = useUpgradeStore()
</script>

<template>
  <div class="upgrade-list_container">
    <UpgradeCard
      v-for="upgrade in upgradeStore.upgrades"
      :key="upgrade.id"
      :id="upgrade.id"
      :level="upgrade.level"
      :cost="upgrade.cost"
    />
  </div>
</template>
