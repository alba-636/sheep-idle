// Multiplicator is used to handle the decimal of the bigints.
const MULTIPLICATION_MODIFICATOR = 1000n

class MagicNumber {
  private value: bigint

  constructor(value: bigint | number, applyModificator: boolean = true) {
    const modificator = applyModificator ? MULTIPLICATION_MODIFICATOR : 1n
    if (typeof value === 'bigint') {
      this.value = value * modificator
    } else if (typeof value === 'number') {
      this.value = BigInt(value * Number(modificator))
    } else {
      throw Error(
        '[MagicNumber:constructor] value should be a bigint or a number! type: ' + typeof value,
      )
    }
  }

  getValue(): bigint {
    return this.value / MULTIPLICATION_MODIFICATOR
  }

  multiplication(withNumber: MagicNumber): MagicNumber {
    const result = this.value * withNumber.value
    // The multiplicator is apply twice (on this.value and withNumber.value), so, to apply the modificator only once, we need to remove one.
    return new MagicNumber(result / MULTIPLICATION_MODIFICATOR, false)
  }

  addition(withNumber: MagicNumber): MagicNumber {
    const result = this.value + withNumber.value
    return new MagicNumber(result, false)
  }

  pow(power: bigint): MagicNumber {
    if (power === 0n) return new MagicNumber(0)
    // ** apply multiple time the multiplicator, so we need to remove them and keep only one.
    const result = this.value ** power / MULTIPLICATION_MODIFICATOR ** (power - 1n)
    return new MagicNumber(result, false)
  }

  valueOf(): bigint {
    return this.value
  }

  toString(): string {
    return this.value.toString()
  }
}

export default MagicNumber
