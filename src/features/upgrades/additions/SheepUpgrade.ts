import Upgrade, { UpgradeType } from '../Upgrade'

class SheepUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('sheep_upgrade', 0, UpgradeType.Addition, 1, level)
  }
}

export default SheepUpgrade
