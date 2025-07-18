import Upgrade, { UpgradeType } from '../Upgrade'

class EnclosureUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('enclosure_upgrade', 2, UpgradeType.Addition, 10, level)
  }
}

export default EnclosureUpgrade
