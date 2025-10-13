import ItemsList from './ItemsList'

export default async function AllItemsByCategoryPage({
  params,
}: {
  params: Promise<{ title: string }>
}) {
  const { title } = await params

  return <ItemsList categoryTitle={title} />
}
