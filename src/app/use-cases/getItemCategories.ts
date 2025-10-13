import { AuctionItem } from '../types'

export function getItemCategories(items: AuctionItem[]) {
  if (!items || items.length === 0) {
    return []
  }

  const categories: string[] = []
  items.forEach((item) => {
    const category = item.category
    if (!categories.includes(category)) {
      categories.push(item.category)
    }
  })

  return categories
}
