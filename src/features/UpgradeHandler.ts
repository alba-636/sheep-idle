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

  addUpgrade(...upgrades: Upgrade[]) {
    const store = useUpgradeStore()

    for (const upgrade of upgrades) {
      if (this.upgrades.some(({ id }) => upgrade.id === id)) return // Can onlw have 1 instance of each upgrade.
      this.upgrades.push(upgrade)
      store.addUpgrade(upgrade)
    }

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
