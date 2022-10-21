export const getColorCode = (color: string) => {
  switch (color) {
    case 'success':
      return 92
    case 'warning':
      return 93
    case 'danger':
      return 91
    default:
      return 97
  }
}

export const std = (input: string | number, level: string) => {
  return `\x1B[${getColorCode(level)}m${input}\x1B[0m`
}
