import { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'

import './styles.css'

const D_DAYS = [
  '2022/7/19 01:41',
  '2022/7/19 03:01',
  '2022/7/19 18:18',
  '2022/7/20 04:32',
  '2022/7/21 22:23',
  '2022/7/24 20:56',
  '2022/7/25 02:10',
]

const getLasted = () => {
  const startAt = new Date(D_DAYS[D_DAYS.length - 1])

  return formatDistance(new Date(), startAt)
}

const useLasted = () => {
  const [lasted, setLasted] = useState(getLasted())

  useEffect(() => {
    setInterval(() => {
      setLasted(getLasted())
    }, 1000)
  }, [])

  return lasted
}

const Lasted = () => {
  const lasted = useLasted()

  return (
    <div className="Lasted">
      <span>You lasted </span>
      <span style={{ fontStyle: 'italic' }}>{lasted}</span>
      <span>...!</span>
    </div>
  )
}

const Whys = () => {
  const whys = [
    'No MS #Edge, so no #NSFW contents',
    'No Safari, no saved files',
    'No #Paids, no #FreeAcademics',
    'Really, it makes me feel so tired',
  ]

  return (
    <ul className="Whys">
      {whys.map((why, i) => (
        <li key={i}>• {why}</li>
      ))}
    </ul>
  )
}

export default function App () {
  return (
    <div className="App">
      <Lasted />
      <Whys />
    </div>
  )
}
