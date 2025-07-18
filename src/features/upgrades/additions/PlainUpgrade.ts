import Upgrade, { UpgradeType } from '../Upgrade'

class PlainUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('plain_upgrade', 10, UpgradeType.Addition, 100000, level)
  }
}

export default PlainUpgrade
