import Upgrade, { UpgradeType } from '../Upgrade'

class LandUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('land_upgrade', 6, UpgradeType.Addition, 1000, 40_000, 1.6, level)
  }
}

export default LandUpgrade
