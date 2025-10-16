'use client'

import Image from 'next/image'
import Link from 'next/link'
import { type AuctionItem, CountdownUnit } from '@/app/types'
import { getFormattedDate, getFormattedPrice, getCountdown } from '@/app/lib/utils'
import { useTimer } from '@/app/context/TimerContext'
import CountdownTimer from '@/app/components/CountdownTimer'

interface AuctionItemProps {
  item: AuctionItem
}

export function AuctionItem({ item }: AuctionItemProps) {
  const formattedDate = getFormattedDate(item.endDate)
  const formatedPrice = getFormattedPrice(item.estimatedValue)
  const { now } = useTimer()
  const countDown = getCountdown(now, new Date(item.endDate).getTime())

  let countdownUnits: CountdownUnit[] = []
  if (countDown) {
    const { days, hours, minutes, seconds } = countDown

    countdownUnits = [
      {
        value: days,
        text: 'days',
      },
      {
        value: hours,
        text: 'hours',
      },
      {
        value: minutes,
        text: 'mins',
      },
      {
        value: seconds,
        text: 'secs',
      },
    ]
  }

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
            {item.status === 'live' && <CountdownTimer units={countdownUnits} />}
          </div>
        </div>
      </Link>
    </div>
  )
}
