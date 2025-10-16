export interface AuctionItem {
  id: number
  title: string
  description: string
  category: string
  estimatedValue: number
  imageUrl: string
  auctionHouse: string
  endDate: string
  status: 'upcoming' | 'live' | 'ended'
}

export interface AuctionItemsByCategory {
  title: string
  items: AuctionItem[]
}

export interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface CountdownUnit {
  value: number
  text: string
}

