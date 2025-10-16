import { AuctionItem } from '@/app/types'

export function searchItemsByText(textToSearch: string) {
  return (items: AuctionItem[]) => {
    const query = textToSearch.trim().toLowerCase()
    if (!query || query.length < 2) {
      return items
    }
    return items.filter((item) => item.title.toLowerCase().includes(query))
  }
}
