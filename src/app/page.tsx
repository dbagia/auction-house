import { getAuctionItems } from './use-cases/getAuctionItems'
import { CategorisedAuctionItems } from './components/CategorisedAuctionItems'
import { AuctionItem } from './types'

export default async function Home() {
  const auctionItems: AuctionItem[] = await getAuctionItems()
  return <CategorisedAuctionItems items={auctionItems} />
}
