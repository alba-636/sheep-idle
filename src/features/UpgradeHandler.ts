import { parseBigInt } from './helpers/helper'
import MagicNumber from './helpers/MagicNumber'
import EnclosureUpgrade from './upgrades/additions/EnclosureUpgrade'
import FarmUpgrade from './upgrades/additions/FarmUpgrade'
import LandUpgrade from './upgrades/additions/LandUpgrade'
import PlainUpgrade from './upgrades/additions/PlainUpgrade'
import SheepUpgrade from './upgrades/additions/SheepUpgrade'
import ValleyUpgrade from './upgrades/additions/ValleyUpgrade'
import FertilizerUpgrade from './upgrades/multiplications/FertilizerUpgrade'
import LawnmowerUpgrade from './upgrades/multiplications/LawnmowerUpgrade'
import MedicationUpgrade from './upgrades/multiplications/MedicationUpgrade'
import WaterUpgrade from './upgrades/multiplications/WaterUpgrade'
import WeatUpgrade from './upgrades/multiplications/WeatUpgrade'
import { UpgradeType, type UpgardeSave } from './upgrades/Upgrade'
import type Upgrade from './upgrades/Upgrade'
import WoolHandler from './WoolHandler'
import { useUpgradeStore } from '@/stores/upgrades'

class UpgradeHandler {
  private static _instance: UpgradeHandler

  constructor() {
    this.setUpgrades([
      // Addition Upgrades
      new SheepUpgrade(),
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
  }

  public static get instance() {
    return this._instance || (this._instance = new UpgradeHandler())
  }

  private upgrades: Upgrade[] = []

  setUpgradeLevel(upgradeId: string, level: bigint) {
    const upgrade = this.upgrades.find((upgrade) => upgrade.id === upgradeId)
    if (!upgrade) return

    upgrade.level = level

    const store = useUpgradeStore()
    store.updateUpgrade(upgrade)

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

  getSave(): UpgardeSave[] {
    return this.upgrades.map((upgrade) => upgrade.getSave())
  }

  loadSave(upgrades: UpgardeSave[]) {
    upgrades.forEach((upgrade) => {
      const level = parseBigInt(upgrade.level)
      this.setUpgradeLevel(upgrade.id, level)
    })
  }

  private setUpgrades(upgrades: Upgrade[]) {
    const store = useUpgradeStore()

    upgrades.sort((a, b) => (a.order < b.order ? -1 : 1))

    this.upgrades = upgrades
    store.setUpgrades(upgrades)

    this.computeModificators()
  }

  private computeModificators() {
    const additionUpgrades = this.getUpgradesByType(UpgradeType.Addition)
    const multiplicationUpgrades = this.getUpgradesByType(UpgradeType.Multiplication)

    const additions = additionUpgrades
      .map((upgrade) => upgrade.getModificator())
      .reduce((sum, a) => sum.addition(a), new MagicNumber(0))

    const multiplications = multiplicationUpgrades
      .map((upgrade) => upgrade.getModificator())
      .reduce((sum, a) => sum.addition(a), new MagicNumber(0))

    const modificators =
      multiplications.getValue() === 0n ? additions : additions.multiplication(multiplications)
    WoolHandler.instance.setProductionRate(modificators.getValue())
  }

  private getUpgradesByType(type: UpgradeType): Upgrade[] {
    return this.upgrades.filter((upgrade) => upgrade.type === type)
  }
}

export default UpgradeHandler
