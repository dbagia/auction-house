import { AuctionItemDetail } from '@/app/components/AuctionItemDetail'

export default async function AuctionItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <AuctionItemDetail itemId={id} />
}
