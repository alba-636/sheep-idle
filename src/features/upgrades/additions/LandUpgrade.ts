import Upgrade, { UpgradeType } from '../Upgrade'

class LandUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('land_upgrade', UpgradeType.Addition, BigInt(1000), 5000, 1.4, level)
  }
}

export default LandUpgrade
