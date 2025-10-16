import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { AuctionItemsByCategory } from '../types'
import { AuctionItem } from './AuctionItem'

interface CategoryProps {
  category: AuctionItemsByCategory
  shouldShowLimitedItems: boolean
}

export default function Category({ category, shouldShowLimitedItems }: CategoryProps) {
  return (
    <section key={category.title}>
      <div className="flex items-center justify-between my-4">
        <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
        {shouldShowLimitedItems && (
          <button className="text-sm flex items-center">
            <Link href={`/category/${category.title.toLowerCase()}`}>View More</Link>
            <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-4">
        {(shouldShowLimitedItems ? category.items.slice(0, 3) : category.items).map((item) => (
          <AuctionItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
