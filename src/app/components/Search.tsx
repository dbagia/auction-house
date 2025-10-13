interface SearchProps {
  searchText: string
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Search({ searchText, handler }: SearchProps) {
  return (
    <div className="max-w-xl">
      <input
        type="text"
        value={searchText}
        placeholder="Search items..."
        onChange={handler}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 mb-3 py-2 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
  )
}
