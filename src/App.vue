<script setup lang="ts">
import MainContainer from '@/components/MainContainer.vue'
import WoolHandler from '@/features/WoolHandler.ts'
import UpgradeHandler from '@/features/UpgradeHandler.ts'
import SheepUpgrade from '@/features/upgrades/additions/SheepUpgrade.ts'
import FertilizerUpgrade from '@/features/upgrades/multiplications/FertilizerUpgrade.ts'
import EnclosureUpgrade from '@/features/upgrades/additions/EnclosureUpgrade'
import FarmUpgrade from '@/features/upgrades/additions/FarmUpgrade'
import LandUpgrade from '@/features/upgrades/additions/LandUpgrade'
import ValleyUpgrade from '@/features/upgrades/additions/ValleyUpgrade'
import PlainUpgrade from '@/features/upgrades/additions/PlainUpgrade'
import WaterUpgrade from '@/features/upgrades/multiplications/WaterUpgrade'
import WeatUpgrade from '@/features/upgrades/multiplications/WeatUpgrade'
import LawnmowerUpgrade from '@/features/upgrades/multiplications/LawnmowerUpgrade'
import MedicationUpgrade from '@/features/upgrades/multiplications/MedicationUpgrade'

UpgradeHandler.instance.setUpgrades([
  // Addition Upgrades
  new SheepUpgrade(1n),
  new EnclosureUpgrade(),
  new FarmUpgrade(),
  new LandUpgrade(),
  new ValleyUpgrade(),
  new PlainUpgrade(),

  // Multiplication Upgrades
  new WaterUpgrade(),
  new WeatUpgrade(),
  new LawnmowerUpgrade(),
  new FertilizerUpgrade(),
  new MedicationUpgrade(),
])

WoolHandler.instance.start()
</script>

<template>
  <MainContainer />
</template>

<style>
html,
body,
#app {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
}
</style>
