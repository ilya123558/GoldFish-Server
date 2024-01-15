import { ISort } from "../models/product.interface";

export const playersFilter = (players: ISort['players']) => {
  if (players.from === 0) return {}

  if (players.from === 7) return {
    playersFrom: { gte: 7 },
    playersTo: { gte: 7 }
  }

  if (players.to === 7) return {
    playersFrom: players.from,
    playersTo: { gte: 7 }
  }

  return {
    playersFrom: players.from,
    playersTo: players.to
  }
} 