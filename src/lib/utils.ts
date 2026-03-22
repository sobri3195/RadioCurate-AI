export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ')
}

export function formatPercent(value: number) {
  return `${value.toFixed(0)}%`
}
