import { AuctionItem, AuctionItemsByCategory } from '../types'

interface AuctionItemsGrouped {
  [key: string]: { title: string; items: AuctionItem[] }
}

export function groupItemsByCategory(items: AuctionItem[]): AuctionItemsByCategory[] {
  const auctionItemsGrouped = items.reduce((acc, item: AuctionItem) => {
    if (!acc[item.category]) {
      acc[item.category] = { title: item.category, items: [] }
    }
    acc[item.category].items.push(item)
    return acc
  }, {} as AuctionItemsGrouped)

  return Object.values(auctionItemsGrouped)
}
