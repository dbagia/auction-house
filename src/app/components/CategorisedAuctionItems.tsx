'use client'
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { AuctionItemsByCategory, type AuctionItem } from '../types'
import { useItems } from '../context/AuctionItemsContext'
import { groupItemsByCategory } from '../use-cases/getAndFormatAuctionItems'
import { Category } from './Category'
import { searchItemsByText } from '../use-cases/searchItemsByText'
import { filterItemsByCategory } from '../use-cases/filterItemsByCategory'
import { pipe } from '../lib/utils'
import { getItemCategories } from '../use-cases/getItemCategories'
import Search from './Search'
import Filters from './Filters'

interface CategorisedAuctionItemsProps {
  items: AuctionItem[]
}

export function CategorisedAuctionItems({ items }: CategorisedAuctionItemsProps) {
  const { setItems } = useItems()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchText, setSearchText] = useState<string>(searchParams.get('search') || '')
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get('category') || ''
  )
  const shouldShowLimitedItems = searchText || selectedCategory ? false : true

  useEffect(() => {
    setItems(items)
  }, [items, setItems])

  useEffect(() => {
    let url = '/'
    if (searchText || selectedCategory) {
      url = `${url}?`
      if (searchText) {
        url = `${url}search=${encodeURIComponent(searchText)}`
      }
      if (selectedCategory) {
        url = `${url}${searchText ? '&' : ''}category=${encodeURIComponent(selectedCategory)}`
      }
      router.replace(url)
    }
  }, [router, searchText, selectedCategory])

  const groupedItems: AuctionItemsByCategory[] = groupItemsByCategory(
    pipe(items, filterItemsByCategory(selectedCategory), searchItemsByText(searchText))
  )
  const categories: string[] = getItemCategories(items)

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchText(value)
  }

  const handleCategoryFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedCategory(value)
  }

  return (
    <>
      <Search searchText={searchText} handler={handleSearchQueryChange} />
      <Filters
        selectedCategory={selectedCategory}
        categories={categories}
        handler={handleCategoryFilter}
      />
      {groupedItems.map((category) => (
        <Category
          category={category}
          key={category.title}
          shouldShowLimitedItems={shouldShowLimitedItems}
        />
      ))}
    </>
  )
}
