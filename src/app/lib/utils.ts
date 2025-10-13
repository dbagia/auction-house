import { format } from 'date-fns'

// Generated through AI
// eslint-disable-next-line
export function pipe<T>(value: T, ...fns: Array<(x: any) => any>): any {
  return fns.reduce((v, fn) => fn(v), value)
}

// Generated through AI
// While this function exists here, this functionality has not been implemented in the final solution
// So this is an unused code
// eslint-disable-next-line
export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timer: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export const getFormattedDate = (dateString: string) =>
  format(new Date(dateString), "MMMM d, yyyy 'at' h:mm a")
export const getFormattedPrice = (price: number) => `$${price / 100}`
