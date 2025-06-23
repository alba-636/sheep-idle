<script setup lang="ts">
import BigIntDisplay from '@/components/helpers/BigIntDisplay.vue'
import GameHandler from '@/features/GameHandler'
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
  if (canBeBought.value) {
    GameHandler.instance.upgradeHandler.tryBuyUpgrade(props.id)
  }
}
</script>

<template>
  <div class="upgrade_container" @click="buyUpgrade">
    <!-- Upgrade Name -->
    <div class="upgradeName_overlay">
      <!-- TODO: Local from id -->
      <div class="upgradeName_container">{{ id }}</div>
    </div>

    <div class="upgrade_level">Level: {{ level }}</div>
    <div class="upgrade_cost">Cost: <BigIntDisplay :value="cost" /></div>

    <div v-if="!canBeBought" class="disable_overlay" />
  </div>
</template>

<style scoped lang="scss">
.upgrade_container {
  cursor: pointer;
  border: 1px solid #000000;

  position: relative;

  .disable_overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: default;
    background-color: #00000022;
  }

  .upgradeName_overlay {
    width: 100%;
    height: 30px;

    display: flex;
    justify-content: center;

    .upgradeName_container {
      padding: 4px;

      border-left: solid 1px #000000;
      border-bottom: solid 1px #000000;
      border-right: solid 1px #000000;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }
  }
}
</style>
