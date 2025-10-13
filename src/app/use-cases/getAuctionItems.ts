import { fetchAutionItems } from '../lib/api'
import { AuctionItem } from '../types'

// The components never directly access the /api. They always have
// to go through a use-case to fetch data. This pattern can be extended
// by adding DI and then we can isolate business logic from data access
// and easily add tests
export async function getAuctionItems(): Promise<AuctionItem[]> {
  return await fetchAutionItems()
}
