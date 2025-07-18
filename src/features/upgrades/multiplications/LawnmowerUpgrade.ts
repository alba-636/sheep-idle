import Upgrade, { UpgradeType } from '../Upgrade'

class LawnmowerUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('lawnmower_upgrade', 5, UpgradeType.Multiplication, 1.6, level)
  }
}

export default LawnmowerUpgrade
