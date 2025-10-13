import Image from 'next/image'
import Link from 'next/link'
import { type AuctionItem } from '../types'
import { getFormattedDate, getFormattedPrice } from '../lib/utils'

interface AuctionItemProps {
  item: AuctionItem
}

export function AuctionItem({ item }: AuctionItemProps) {
  const formattedDate = getFormattedDate(item.endDate)
  const formatedPrice = getFormattedPrice(item.estimatedValue)
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md my-2" key={item.id}>
      <Link href={`/auction-item/${item.id}`}>
        <div className="md:flex">
          <div className="lg:shrink-0">
            <Image
              className="h-100 w-full md:h-70 md:w-70 object-cover"
              src={item.imageUrl}
              alt={item.title}
              width={200}
              height={200}
            />
          </div>
          <div className="p-8">
            <div className="text-lg font-semibold text-indigo-500 uppercase">{item.title}</div>
            <span className="mt-1 block text-sm leading-tight font-medium text-black">
              {item.auctionHouse}
            </span>
            <p className="mt-2 text-gray-500">{item.description}</p>
            <p className="mt-2 text-2xl font-bold text-yellow-600">{formatedPrice}</p>
            <p className="mt-2 text-lg text-gray-600">{formattedDate}</p>
            <p className="mt-2 text-lg text-gray-600">{item.status}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
