import Upgrade, { UpgradeType } from '../Upgrade'

class FertilizerUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('fertilizer_upgrade', UpgradeType.Multiplication, 1.8, 10000, 1.4, level)
  }
}

export default FertilizerUpgrade
