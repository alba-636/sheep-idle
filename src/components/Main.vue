<script setup lang="ts">
import UpgradeList from './Upgrades/UpgradeList.vue'
import WoolCounter from '@/components/WoolCounter.vue'
import { useWoolCounterStore } from '@/stores/woolCounter.ts'
import WoolHandler from '@/features/WoolHandler.ts'
import UpgradeHandler from '@/features/UpgradeHandler.ts'
import SheepUpgrade from '@/features/upgrades/additions/SheepUpgrade.ts'
import FertilizerUpgrade from '@/features/upgrades/multiplications/FertilizerUpgrade.ts'
import EnclosureUpgrade from '@/features/upgrades/additions/EnclosureUpgrade'
import FarmUpgrade from '@/features/upgrades/additions/FarmUpgrade'
import LandUpgrade from '@/features/upgrades/additions/LandUpgrade'
import ValleyUpgrade from '@/features/upgrades/additions/ValleyUpgrade'
import PlainUpgrade from '@/features/upgrades/additions/PlainUpgrade'

const store = useWoolCounterStore()

UpgradeHandler.instance.setUpgrades([
  // Addition Upgrades
  new SheepUpgrade(1n),
  new EnclosureUpgrade(),
  new FarmUpgrade(),
  new LandUpgrade(),
  new ValleyUpgrade(),
  new PlainUpgrade(),

  // Multiplication Upgrades
  new FertilizerUpgrade(),
])

WoolHandler.instance.start()
</script>

<template>
  <div>Hello, World!</div>
  <p>Wool Production: {{ store.woolProductionRate }}/seconds</p>

  <WoolCounter :count="store.woolCount" />

  <UpgradeList />
</template>
