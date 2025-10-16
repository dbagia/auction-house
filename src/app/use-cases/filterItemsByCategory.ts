import { AuctionItem } from '@/app/types'

export function filterItemsByCategory(category: string) {
  return (items: AuctionItem[]) => {
    if (!category) {
      return items
    }
    return items.filter((item) => item.category === category)
  }
}
