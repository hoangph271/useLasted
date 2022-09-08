import formatDistance from 'date-fns/formatDistance'
import { useEffect, useState } from 'react'
import { D_DAYS } from '../utils'

const getLasted = () => {
  const startAt = new Date(D_DAYS[D_DAYS.length - 1])

  return formatDistance(new Date(), startAt)
}

export const useLasted = () => {
  const [lasted, setLasted] = useState(getLasted())

  useEffect(() => {
    setInterval(() => {
      setLasted(getLasted())
    }, 1000)
  }, [])

  return lasted
}
