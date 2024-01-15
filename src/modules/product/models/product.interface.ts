export interface IProduct {
  id: number,
  ageLimit: number,
  imgSrcList: string[],
  playersFrom: number,
  playersTo: number,
  price: number,
  timeFrom: number,
  timeTo: number,
  title: string,
  categoryUrl: string,
  cotalogUrl: string,
  description: string,
  characteristics: string,
  rules: string,
  count: number,
  url: string,
  availability: 'available' | 'forOrdering' | 'unavailable',
  faq: {
    question: string,
    answer: string
  }[]

  discount?: number,
}

export interface ISort {
  price: {
    from: number,
    to: number,
    maxPrice: number,
    discount: boolean
  },
  age: {
    from: number
    to: number,
    toggle: boolean
  }[],
  availability: {
    title: string,
    value: 'available' | 'forOrdering' | 'unavailable',
    toggle: boolean
  }[],
  categoryUrl: string,
  players: {
    from: number
    to: number
    list: (string | number)[]
  }
}