export const сategoryFilter = (categoryUrl: string | undefined) => {
  if (categoryUrl) {
    return { categoryUrl }
  }

  return {}
} 