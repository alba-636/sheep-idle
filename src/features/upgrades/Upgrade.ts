enum UpgradeType {
  Addition = 0,
  Multiplication = 1,
}

class Upgrade {
  id: string
  type: UpgradeType
  baseModificator: bigint
  initialCost: number
  costMutiplicator: number
  level: bigint = BigInt(0)

  constructor(
    id: string,
    type: UpgradeType,
    baseModificator: bigint,
    initialCost: number,
    costMultiplicator: number,
    level?: bigint,
  ) {
    this.id = id
    this.type = type
    this.baseModificator = baseModificator
    this.initialCost = initialCost
    this.costMutiplicator = costMultiplicator

    this.level = level || this.level
  }

  getModificator(): bigint {
    return this.baseModificator * this.level
  }

  getCost(): bigint {
    return BigInt(this.initialCost) * BigInt(this.baseModificator) ** this.level
  }
}

export { UpgradeType }

export default Upgrade
