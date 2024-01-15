import { ISort } from "../models/product.interface"

export const ageFilter = (age: ISort['age']) => {
  const range: ({ ageLimit: { gte: number, lte: number } } | { ageLimit: { gte: number } })[] = []

  for (const ageItem of age) {
    if (ageItem.toggle) {
      if (ageItem.to) {
        range.push({
          ageLimit: {
            gte: ageItem.from,
            lte: ageItem.to
          }
        })
        continue
      }
      range.push({
        ageLimit: {
          gte: ageItem.from
        }
      })
    }
  }

  return range.length === 0 ? {} : { OR: range }
} 