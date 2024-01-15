export const findPriceWithDiscount = (price: number, discount: number) => {
  return price - Math.floor((price / 100) * discount)
}