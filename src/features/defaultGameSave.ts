import type { GameSave } from './GameHandler'

const defaultSave: GameSave = {
  wool: {
    count: '0',
    lastProductionTime: '0', // 0 for no current production time.
  },

  upgrades: [{ id: 'sheep_upgrade', level: '1' }],
}

export { defaultSave }
