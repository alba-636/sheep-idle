import Upgrade, { UpgradeType } from '../Upgrade'

class MedicationUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('medication_upgrade', 9, UpgradeType.Multiplication, 2, level)
  }
}

export default MedicationUpgrade
