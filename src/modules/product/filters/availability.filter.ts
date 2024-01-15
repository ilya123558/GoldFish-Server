import { ISort } from "../models/product.interface";

export const availabilityFilter = (availabilityList: ISort['availability']) => {
  const availability = availabilityList.find(item => item.toggle)?.value || 'available'

  return { availability }
} 