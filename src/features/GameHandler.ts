import { defaultSave } from './defaultGameSave'
import UpgradeHandler from './UpgradeHandler'
import type { UpgardeSave } from './upgrades/Upgrade'
import WoolHandler, { type WoolHandlerSave } from './WoolHandler'

type GameSave = {
  wool: WoolHandlerSave
  upgrades: UpgardeSave[]
}

const GAME_SAVE_KEY = 'gameSave'

class GameHandler {
  private static _instance: GameHandler

  private constructor() {
    this.loadSaveFromLS()
  }

  private saveInterval: number | null = null

  public static get instance(): GameHandler {
    return this._instance || (this._instance = new GameHandler())
  }

  public get woolHandler(): WoolHandler {
    return WoolHandler.instance
  }

  public get upgradeHandler(): UpgradeHandler {
    return UpgradeHandler.instance
  }

  public start() {
    this.woolHandler.start()
    this.startSaveInterval()
  }

  getSave(): GameSave {
    return {
      wool: this.woolHandler.getSave(),
      upgrades: this.upgradeHandler.getSave(),
    }
  }

  save() {
    try {
      console.log('[GameHandler:save] Saving game...')
      const saveObj = this.getSave()
      const saveStr = JSON.stringify(saveObj)
      window.localStorage.setItem(GAME_SAVE_KEY, saveStr)
      console.log('[GameHandler:save] Game saved!')
    } catch (error) {
      console.error('[GameHandler:save]', error)
    }
  }

  getSaveFromLS(): GameSave {
    const saveStr = window.localStorage.getItem(GAME_SAVE_KEY)
    const saveObj: GameSave = saveStr ? JSON.parse(saveStr) : defaultSave
    return saveObj
  }

  loadSave(save: GameSave) {
    this.woolHandler.loadSave(save.wool)
    this.upgradeHandler.loadSave(save.upgrades)
  }

  loadSaveFromLS() {
    const save = this.getSaveFromLS()
    this.loadSave(save)
  }

  private startSaveInterval() {
    this.clearSaveInterval()
    this.saveInterval = setInterval(() => {
      this.save()
    }, 10_000)
  }

  private clearSaveInterval() {
    if (this.saveInterval) {
      clearInterval(this.saveInterval)
      this.saveInterval = null
    }
  }
}

export type { GameSave }
export default GameHandler
