export const validationOptional = <T extends object>(
  param: Partial<T>,
  op?: (key: string) => boolean
): param is T => {
  if (!op) {
    return Object.values(param).every((val) => val)
  }
  return Object.keys(param)
    .map((key) => op(key))
    .every((val) => val)
}
