import Upgrade, { UpgradeType } from '../Upgrade'

class LandUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('land_upgrade', 6, UpgradeType.Addition, 1000, level)
  }
}

export default LandUpgrade
