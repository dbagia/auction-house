import { AuctionItem } from '@/app/types'

export async function fetchAuctionItems(): Promise<AuctionItem[]> {
  const response = await fetch(
    'https://sttrafficplatformassets.blob.core.windows.net/traffic-assets/lots.json',
    { cache: 'force-cache' }
  )
  if (!response.ok) {
    console.error('Failed to fetch auction items', response.statusText)
    throw new Error('Failed to fetch auction items')
  }
  const data: AuctionItem[] = (await response.json()) as AuctionItem[]
  return data
}
