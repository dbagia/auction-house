import { type CountdownUnit } from '@/app/types'

export default function CountdownTimer({ units }: { units: CountdownUnit[] }) {
  return (
    <div className="flex gap-2">
      {units.map((u, i) => (
        <CountdownUnit value={u.value} text={u.text} key={i} />
      ))}
    </div>
  )
}

function CountdownUnit({ value, text }: CountdownUnit) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl mx-auto mt-4 p-2 rounded-sm border border-gray-400">{value}</div>
      <div className="text-xs max-auto my-2 uppercase">{text}</div>
    </div>
  )
}
