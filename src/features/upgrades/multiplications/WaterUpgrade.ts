import Upgrade, { UpgradeType } from '../Upgrade'

class WaterUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('water_upgrade', 1, UpgradeType.Multiplication, 1.2, 400, 1.6, level)
  }
}

export default WaterUpgrade
