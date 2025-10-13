'use client'
import { AuctionItem } from '@/app/components/AuctionItem'
import { useItems } from '@/app/context/AuctionItemsContext'

interface ItemsListProps {
  categoryTitle: string
}
export default function ItemsList({ categoryTitle }: ItemsListProps) {
  const { items } = useItems()

  if (!items || items.length === 0) {
    return null
  }

  const categoryTitleSanitized = decodeURIComponent(categoryTitle)
  const filteredItems = items?.filter(
    (item) => item.category.toLowerCase() === categoryTitleSanitized
  )

  console.log({ items, filteredItems })

  return (
    <>
      <h2 className="text-lg">
        Showing all <span className="capitalize">{categoryTitleSanitized}</span>
      </h2>
      {filteredItems.map((item) => (
        <AuctionItem item={item} key={item.id} />
      ))}
    </>
  )
}
