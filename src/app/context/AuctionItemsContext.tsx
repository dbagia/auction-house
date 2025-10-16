'use client'
import { type AuctionItem } from '@/app/types'
import { createContext, useContext, useState, ReactNode } from 'react'

interface AuctionItemsContextType {
  items: AuctionItem[] | null
  setItems: (items: AuctionItem[]) => void
}

const AuctionItemsContext = createContext<AuctionItemsContextType | undefined>(undefined)

export function AuctionItemsProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<AuctionItem[] | null>(null)

  return (
    <AuctionItemsContext.Provider value={{ items, setItems }}>
      {children}
    </AuctionItemsContext.Provider>
  )
}

export function useItems(): AuctionItemsContextType {
  const ctx = useContext(AuctionItemsContext)
  if (!ctx) {
    throw new Error('useItems must be used inside AuctionItemsProvider')
  }
  return ctx
}
