<script setup lang="ts">
import UpgradeList from './Upgrades/UpgradeList.vue'
import WoolCounter from '@/components/WoolCounter.vue'
import { useWoolCounterStore } from '@/stores/woolCounter.ts'
import WoolHandler from '@/features/WoolHandler.ts'
import UpgradeHandler from '@/features/UpgradeHandler.ts'
import SheepUpgrade from '@/features/upgrades/additions/SheepUpgrade.ts'
import FertilizerUpgrade from '@/features/upgrades/multiplications/FertilizerUpgrade.ts'

const store = useWoolCounterStore()

UpgradeHandler.instance.addUpgrade(new SheepUpgrade(1n), new FertilizerUpgrade(0n))

WoolHandler.instance.start()
</script>

<template>
  <div>Hello, World!</div>
  <p>Wool Production: {{ store.woolProductionRate }}/seconds</p>

  <WoolCounter :count="store.woolCount" />

  <UpgradeList />
</template>
