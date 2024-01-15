import { ISort } from "../models/product.interface"

export const priceFilter = (price: ISort['price']) => {

  return price.discount
    ? {
      price: {
        gte: price.from,
        lte: price.to,
      },
      discount: {
        gte: 0
      }
    }
    : {
      price: {
        gte: price.from,
        lte: price.to,
      }
    }
}