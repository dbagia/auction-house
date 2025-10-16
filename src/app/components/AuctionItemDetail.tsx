'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AuctionItem, CountdownUnit } from '@/app/types'
import { useItems } from '@/app/context/AuctionItemsContext'
import { useTimer } from '@/app/context/TimerContext'
import Badge, { BadgeType } from '@/app/components/ui/Badge'
import CountdownTimer from '@/app/components/CountdownTimer'
import { getFormattedDate, getFormattedPrice, getCountdown } from '@/app/lib/utils'

interface AuctionItemDetailProps {
  itemId: string
}

export function AuctionItemDetail({ itemId }: AuctionItemDetailProps) {
  const [item, setItem] = useState<AuctionItem | null>(null)
  const { items, setItems } = useItems()
  const { now } = useTimer()

  const id = Number(itemId)
  if (isNaN(id)) {
    throw new Error('Invalid item')
  }

  useEffect(() => {
    async function findItem() {
      if (items) {
        const itemResult = items.find((item) => item.id === id)
        if (itemResult) {
          return setItem(itemResult)
        }
      }

      const allItems = await fetch('/api/auction-items')
      const auctionItems: AuctionItem[] = (await allItems.json()) as AuctionItem[]
      setItems(auctionItems)
      const itemResult = auctionItems.find((item) => item.id === id)
      if (itemResult) {
        setItem(itemResult)
      }
    }

    findItem()
  }, [id, items, setItems])

  if (!item) {
    return <p>Loading...</p>
  }

  const formattedDate = getFormattedDate(item.endDate)
  const formatedPrice = getFormattedPrice(item.estimatedValue)
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

  const badgeTypeByStatus: Record<string, BadgeType> = {
    upcoming: 'warn',
    ended: 'disabled',
    live: 'green',
  }

  return (
    <div className="overflow-hidden bg-white my-2" key={item.id}>
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image
            className="h-full w-full object-cover"
            src={item.imageUrl}
            alt={item.title}
            width={300}
            height={300}
          />
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge type="disabled" text={item.category} />
                <Badge type={badgeTypeByStatus[item.status]} text={item.status} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {item.title}
              </h1>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                  Estimated Value
                </p>
                <p className="text-3xl font-bold text-yellow-600">{formatedPrice}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Auction House</p>
                <p className="text-lg font-medium text-foreground">{item.auctionHouse}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">End Date</p>
                <p className="text-lg font-medium text-foreground">{formattedDate}</p>
              </div>
              {item.status === 'live' && (
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Ends In</p>
                  <CountdownTimer units={countdownUnits} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
