import Upgrade, { UpgradeType } from "../Upgrade";

class FertilizerUpgrade extends Upgrade {
  constructor (level?: bigint) {
    super('fertilizer_upgrade', UpgradeType.Multiplication, BigInt(2), level)
  }
}

export default FertilizerUpgrade
