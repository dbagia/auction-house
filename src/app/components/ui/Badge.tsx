export type BadgeType = 'disabled' | 'warn' | 'green'

interface BadgeProps {
  text: string
  type: BadgeType
}

export default function Badge({ text, type }: BadgeProps) {
  switch (type) {
    case 'disabled': {
      return (
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
          {text}
        </span>
      )
    }
    case 'warn': {
      return (
        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20">
          {text}
        </span>
      )
    }
    case 'green': {
      return (
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">
          {text}
        </span>
      )
    }
    default:
      return null
  }
}
