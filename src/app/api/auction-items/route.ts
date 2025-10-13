import { fetchAuctionItems } from '@/app/lib/api'

export const dynamic = 'force-static'

export async function GET() {
  const auctionItems = await fetchAuctionItems()
  return Response.json(auctionItems)
}
