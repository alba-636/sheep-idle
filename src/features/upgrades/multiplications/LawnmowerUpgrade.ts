import Upgrade, { UpgradeType } from '../Upgrade'

class LawnmowerUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('lawnmower_upgrade', UpgradeType.Multiplication, 1.6, 1000, 1.3, level)
  }
}

export default LawnmowerUpgrade
