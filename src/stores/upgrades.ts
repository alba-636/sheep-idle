import type Upgrade from '@/features/upgrades/Upgrade'
import { defineStore } from 'pinia'
import { ref } from 'vue'

type UpgradeType = {
  id: string
  level: bigint
  cost: bigint
}

export const useUpgradeStore = defineStore('upgrades', () => {
  const upgrades = ref<UpgradeType[]>([])

  function addUpgrade(upgrade: Upgrade) {
    upgrades.value.push({
      id: upgrade.id,
      level: upgrade.level,
      cost: upgrade.getCost(),
    })
  }

  function updateUpgrade(upgrade: Upgrade) {
    const currentUpgrade = upgrades.value.find(({ id }) => upgrade.id === id)

    if (!currentUpgrade) return

    const newCost = upgrade.getCost()
    if (currentUpgrade.level !== upgrade.level) currentUpgrade.level = upgrade.level
    if (currentUpgrade.cost !== newCost) currentUpgrade.cost = newCost
  }

  return {
    upgrades,

    addUpgrade,
    updateUpgrade,
  }
})
