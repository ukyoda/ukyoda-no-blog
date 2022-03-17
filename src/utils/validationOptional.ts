export const validationOptional = <T extends object>(
  param: Partial<T>,
  op?: (key: string, value: unknown) => boolean
): param is T => {
  if (!op) {
    return Object.values(param).every((val) => val)
  }

  return Object.entries(param)
    .map(([key, value]) => op(key, value))
    .every((val) => val)
}
