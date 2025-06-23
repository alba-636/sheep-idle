import Upgrade, { UpgradeType } from '../Upgrade'

class FarmUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('farm_upgrade', 4, UpgradeType.Addition, 100, 2000, 1.6, level)
  }
}

export default FarmUpgrade
