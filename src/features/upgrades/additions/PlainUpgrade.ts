import Upgrade, { UpgradeType } from '../Upgrade'

class PlainUpgrade extends Upgrade {
  constructor(level?: bigint) {
    super('plain_upgrade', UpgradeType.Addition, 100000, 500000, 1.6, level)
  }
}

export default PlainUpgrade
