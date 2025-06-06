import Upgrade, { UpgradeType } from '../Upgrade'

class FarmUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('farm_upgrade', UpgradeType.Addition, BigInt(100), 500, 1.3, level)
  }
}

export default FarmUpgrade
