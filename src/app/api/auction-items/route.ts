import { fetchAutionItems } from '@/app/lib/api'

export async function GET() {
  const auctionItems = await fetchAutionItems()
  return Response.json(auctionItems)
}
