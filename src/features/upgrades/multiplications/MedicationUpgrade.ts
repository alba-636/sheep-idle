import Upgrade, { UpgradeType } from '../Upgrade'

class MedicationUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('medication_upgrade', UpgradeType.Multiplication, 2, 100000, 1.5, level)
  }
}

export default MedicationUpgrade
