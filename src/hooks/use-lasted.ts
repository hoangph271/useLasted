import formatDistance from 'date-fns/formatDistance'
import { useEffect, useState } from 'react'
import { D_DAYS, IN_MS_30_DAYS } from '../utils'

const startAt = new Date(D_DAYS[D_DAYS.length - 1])

const getLasted = () => {
  return formatDistance(new Date(), startAt)
}

export const useLasted = () => {
  const [lasted, setLasted] = useState(getLasted())
  const progress = (Date.now() - startAt.getTime()) / IN_MS_30_DAYS * 100

  useEffect(() => {
    const timer = setInterval(() => {
      setLasted(getLasted())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return [lasted, progress.toFixed(3)]
}
