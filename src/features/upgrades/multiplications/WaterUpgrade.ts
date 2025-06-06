import Upgrade, { UpgradeType } from '../Upgrade'

class WaterUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('water_upgrade', UpgradeType.Multiplication, 1.2, 100, 1.1, level)
  }
}

export default WaterUpgrade
