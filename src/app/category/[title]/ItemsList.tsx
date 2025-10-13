'use client'
import { useEffect, useState } from 'react'
import { AuctionItem } from '@/app/components/AuctionItem'
import { useItems } from '@/app/context/AuctionItemsContext'
import { type AuctionItem as AuctionItemType } from '@/app/types'

interface ItemsListProps {
  categoryTitle: string
}
export default function ItemsList({ categoryTitle }: ItemsListProps) {
  const { items } = useItems()
  const [listItems, setListItems] = useState<AuctionItemType[] | null>(items)

  useEffect(() => {
    async function fetchItemsIfNeeded() {
      if (!listItems) {
        const allItems = await fetch('/api/auction-items')
        const auctionItems = (await allItems.json()) as AuctionItemType[]
        setListItems(auctionItems)
      }
    }

    fetchItemsIfNeeded()
  }, [listItems, setListItems])

  const categoryTitleSanitized = decodeURIComponent(categoryTitle)
  const filteredItems = listItems?.filter(
    (item) => item.category.toLowerCase() === categoryTitleSanitized
  )

  return (
    <>
      <h2 className="text-lg">
        Showing all <span className="capitalize">{categoryTitleSanitized}</span>
      </h2>
      {filteredItems?.map((item) => (
        <AuctionItem item={item} key={item.id} />
      ))}
    </>
  )
}
