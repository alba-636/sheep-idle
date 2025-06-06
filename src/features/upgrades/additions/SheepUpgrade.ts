import Upgrade, { UpgradeType } from '../Upgrade'

class SheepUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('sheep_upgrade', UpgradeType.Addition, BigInt(1), 5, 1.1, level)
  }
}

export default SheepUpgrade
