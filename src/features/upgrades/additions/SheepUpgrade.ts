import Upgrade, { UpgradeType } from '../Upgrade'

class SheepUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('sheep_upgrade', UpgradeType.Addition, BigInt(1), 5, 2, level)
  }
}

export default SheepUpgrade
