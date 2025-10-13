interface FiltersProps {
  selectedCategory: string
  categories: string[]
  handler: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Filters({ selectedCategory, categories, handler }: FiltersProps) {
  return (
    <div className="flex justify-items-start items-center gap-2">
      <h3 className="">Filter:</h3>
      <select
        name="categoryFilter"
        id="categoryFilter"
        className="border-gray-300 px-4 py-2 text-sm shadow-sm border border-gray-300 px-3 py-2 rounded-lg"
        onChange={handler}
        value={selectedCategory}
      >
        <option value="">Select category</option>
        {categories.map((title) => (
          <option value={title} key={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  )
}
