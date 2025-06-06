import Upgrade, { UpgradeType } from '../Upgrade'

class EnclosureUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('enclosure_upgrade', UpgradeType.Addition, BigInt(10), 50, 1.2, level)
  }
}

export default EnclosureUpgrade
