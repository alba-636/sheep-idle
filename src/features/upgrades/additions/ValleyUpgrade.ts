import Upgrade, { UpgradeType } from '../Upgrade'

class ValleyUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('valley_upgrade', 8, UpgradeType.Addition, 10000, 800_000, 1.6, level)
  }
}

export default ValleyUpgrade
