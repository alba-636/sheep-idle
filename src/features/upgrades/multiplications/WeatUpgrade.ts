import Upgrade, { UpgradeType } from '../Upgrade'

class WeatUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('weat_upgrade', UpgradeType.Multiplication, 1.4, 1000, 1.2, level)
  }
}

export default WeatUpgrade
