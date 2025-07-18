import Upgrade, { UpgradeType } from '../Upgrade'

class ValleyUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('valley_upgrade', 8, UpgradeType.Addition, 10000, level)
  }
}

export default ValleyUpgrade
