<script setup>
import { ref } from 'vue'
import { useWoolCounterStore } from '@/stores/woolCounter.ts'
import WoolHandler from '@/features/WoolHandler.ts'
import UpgradeHandler from '@/features/UpgradeHandler.ts'
import SheepUpgrade from '@/features/upgrades/additions/SheepUpgrade.ts'
import FertilizerUpgrade from '@/features/upgrades/multiplications/FertilizerUpgrade.ts'

const store = useWoolCounterStore()

const sheepUpgrade = new SheepUpgrade(13n)
const fertilizerUpgrade = new FertilizerUpgrade(6n)

UpgradeHandler.instance.addUpgrade(sheepUpgrade)
UpgradeHandler.instance.addUpgrade(fertilizerUpgrade)

WoolHandler.instance.start()

</script>

<template>
  <div>Hello, World!</div>
  <p>Wool Production: {{ store.woolProductionRate }}/seconds</p>
  <p>Wool: {{ store.woolCount }}</p>
</template>
