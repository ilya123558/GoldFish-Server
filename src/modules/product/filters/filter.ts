import { ISort } from "../models/product.interface"
import { ageFilter } from "./age.filter"
import { availabilityFilter } from "./availability.filter"
import { сategoryFilter } from "./category.filter"
import { playersFilter } from "./players.filter"
import { priceFilter } from "./price.filter"

export const filter = (sort: ISort) => {
  return {
    ...ageFilter(sort.age),
    ...availabilityFilter(sort.availability),
    ...сategoryFilter(sort.categoryUrl),
    ...playersFilter(sort.players),
    ...priceFilter(sort.price),
  }
}