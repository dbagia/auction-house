import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky border-b border-gray-200 mb-5">
      <div className="mx-auto px-3 py-3">
        <h1 className="text-3xl font-bold">
          <Link href="/">Auction House</Link>
        </h1>
      </div>
    </header>
  )
}
