import { useWoolCounterStore } from '@/stores/woolCounter'
import { parseBigInt } from './helpers/helper'

type WoolHandlerSave = {
  count: string
  lastProductionTime: string
}

function getCurrentTime(): number {
  return Number((Date.now() / 1000).toFixed(0))
}

class WoolHandler {
  private static _instance: WoolHandler

  private constructor() {
    this.count = BigInt(0)
    this.productionRate = BigInt(1)
    this.lastProductionTime = getCurrentTime()
  }

  public static get instance() {
    return WoolHandler._instance || (WoolHandler._instance = new WoolHandler())
  }

  count: bigint
  productionRate: bigint
  lastProductionTime: number

  private updateInterval: number | null = null

  start() {
    this.startUpdateInterval()
  }

  setProductionRate(rate: bigint) {
    this.productionRate = rate
    this.updateProductionRate()
  }

  removeWool(cost: bigint) {
    this.count -= cost
    this.updateCounter()
  }

  getSave(): WoolHandlerSave {
    return {
      count: this.count.toString(),
      lastProductionTime: this.lastProductionTime.toString(),
    }
  }

  loadSave(save: WoolHandlerSave) {
    this.count = parseBigInt(save.count)
    this.lastProductionTime = Number(save.lastProductionTime) || getCurrentTime()
    this.computeNewWoolCount()
  }

  private startUpdateInterval() {
    this.clearUpdateInterval()
    this.updateInterval = setInterval(() => {
      this.computeNewWoolCount()
    }, 1000)
  }

  private clearUpdateInterval() {
    if (this.updateInterval !== null) {
      clearInterval(this.updateInterval)
      this.updateInterval = null
    }
  }

  private computeNewWoolCount() {
    const productionTime = getCurrentTime()
    const seconds = productionTime - this.lastProductionTime
    this.count += this.productionRate * BigInt(seconds)
    this.lastProductionTime = productionTime
    this.updateCounter()
  }

  private updateCounter() {
    const store = useWoolCounterStore()
    store.setWoolCount(this.count)
  }

  private updateProductionRate() {
    const store = useWoolCounterStore()
    store.setWoolProductionRate(this.productionRate)
  }
}

export type { WoolHandlerSave }
export default WoolHandler
