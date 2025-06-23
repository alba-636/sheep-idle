import Upgrade, { UpgradeType } from '../Upgrade'

class WeatUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('weat_upgrade', 3, UpgradeType.Multiplication, 1.4, 8000, 1.6, level)
  }
}

export default WeatUpgrade
