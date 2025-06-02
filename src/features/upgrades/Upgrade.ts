
enum UpgradeType {
  Addition = 0,
  Multiplication = 1,
}

class Upgrade {
  id: string
  type: UpgradeType
  baseModificator: bigint
  level: bigint = BigInt(1)

  constructor (id: string, type: UpgradeType, baseModificator: bigint, level?: bigint) {
    this.id = id
    this.type = type
    this.baseModificator = baseModificator
    
    this.level = level || this.level
  }

  getModificator (): bigint {
    return this.baseModificator * this.level
  }
}

export {
  UpgradeType
}

export default Upgrade
