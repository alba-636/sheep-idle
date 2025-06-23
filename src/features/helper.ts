export function parseBigInt(value: string, defaultValue: bigint = 0n): bigint {
  try {
    return BigInt(value)
  } catch (error) {
    console.error('[parseBigInt]', error)
    return defaultValue
  }
}
