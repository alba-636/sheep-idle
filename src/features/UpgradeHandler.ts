import { UpgradeType } from './upgrades/Upgrade'
import type Upgrade from './upgrades/Upgrade'
import WoolHandler from './WoolHandler'
import { useUpgradeStore } from '@/stores/upgrades'

class UpgradeHandler {
  private static _instance: UpgradeHandler

  private constructor(upgrades?: Upgrade[]) {
    this.upgrades = upgrades || this.upgrades

    this.computeModificators()
  }

  public static get instance() {
    return this._instance || (this._instance = new UpgradeHandler())
  }

  private upgrades: Upgrade[] = []

  setUpgrades(upgrades: Upgrade[]) {
    const store = useUpgradeStore()

    upgrades.sort((a, b) => (a.initialCost < b.initialCost ? -1 : 1))

    this.upgrades = upgrades
    store.setUpgrades(upgrades)

    this.computeModificators()
  }

  tryBuyUpgrade(id: string) {
    const upgrade = this.upgrades.find((upgrade) => upgrade.id === id)
    if (!upgrade) return

    const upgradeCost = upgrade.getCost()
    const canBeBought = WoolHandler.instance.count >= upgradeCost
    if (!canBeBought) return

    WoolHandler.instance.removeWool(upgradeCost)

    upgrade.level++

    const store = useUpgradeStore()
    store.updateUpgrade(upgrade)

    this.computeModificators()
  }

  private computeModificators() {
    const additionUpgrades = this.getUpgradesByType(UpgradeType.Addition)
    const multiplicationUpgrades = this.getUpgradesByType(UpgradeType.Multiplication)

    const additions = additionUpgrades
      .map((upgrade) => upgrade.getModificator())
      .reduce((sum, a) => sum + a, BigInt(0))

    const multiplications = multiplicationUpgrades
      .map((upgrade) => upgrade.getModificator())
      .reduce((sum, a) => sum + a, BigInt(0))

    const modificators = additions * (multiplications || BigInt(1))
    WoolHandler.instance.setProductionRate(modificators)
  }

  private getUpgradesByType(type: UpgradeType): Upgrade[] {
    return this.upgrades.filter((upgrade) => upgrade.type === type)
  }
}

export default UpgradeHandler
