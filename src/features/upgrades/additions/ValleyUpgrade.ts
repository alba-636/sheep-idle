import Upgrade, { UpgradeType } from '../Upgrade'

class ValleyUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('valley_upgrade', UpgradeType.Addition, BigInt(10000), 50000, 1.5, level)
  }
}

export default ValleyUpgrade
