import Upgrade, { UpgradeType } from '../Upgrade'

class EnclosureUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('enclosure_upgrade', 2, UpgradeType.Addition, 10, 100, 1.6, level)
  }
}

export default EnclosureUpgrade
