enum UpgradeType {
  Addition = 0,
  Multiplication = 1,
}

type UpgardeSave = {
  id: string
  level: string
}

class Upgrade {
  id: string
  order: number
  type: UpgradeType
  baseModificator: number
  initialCost: number
  costMutiplicator: number
  level: bigint = BigInt(0)

  constructor(
    id: string,
    order: number,
    type: UpgradeType,
    baseModificator: number,
    initialCost: number,
    costMultiplicator: number,
    level?: bigint,
  ) {
    this.id = id
    this.order = order
    this.type = type
    this.baseModificator = baseModificator
    this.initialCost = order === 0 ? 5 : 5 * 20 ** order
    this.costMutiplicator = costMultiplicator

    this.level = level || this.level
  }

  getModificator(): bigint {
    return (BigInt(this.baseModificator * 1000) * this.level) / 1000n
  }

  getCost(): bigint {
    if (this.level === 0n) return BigInt(this.initialCost)

    return (
      (BigInt(this.initialCost) * BigInt(+(this.order + 1.2).toFixed(3) * 1000) ** this.level) /
      1000n ** this.level
    )
  }

  getSave(): UpgardeSave {
    return {
      id: this.id,
      level: this.level.toString(),
    }
  }
}

export type { UpgardeSave }
export { UpgradeType }
export default Upgrade
