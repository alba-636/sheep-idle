import Upgrade, { UpgradeType } from '../Upgrade'

class FertilizerUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('fertilizer_upgrade', 7, UpgradeType.Multiplication, 1.8, 3_200_000, 1.6, level)
  }
}

export default FertilizerUpgrade
