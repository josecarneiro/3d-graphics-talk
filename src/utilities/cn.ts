const flattenArray = <Value>(arr: Value[]): Value[] =>
  arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), [])

// Joins classes
export const joinClassNames = (...args): string => flattenArray(args).filter(Boolean).join(' ')

export const cn = joinClassNames
