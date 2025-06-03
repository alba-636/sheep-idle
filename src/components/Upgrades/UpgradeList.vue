<script setup lang="ts">
import UpgradeCard from './UpgradeCard.vue'
import { useUpgradeStore } from '@/stores/upgrades'

const store = useUpgradeStore()
</script>

<template>
  <div class="upgrade-list_container">
    <UpgradeCard
      v-for="upgrade in store.upgrades"
      :key="upgrade.id"
      :name="upgrade.id"
      :level="upgrade.level"
      :cost="upgrade.cost"
    />
  </div>
</template>
