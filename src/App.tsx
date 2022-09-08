import { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'
import { D_DAYS } from './utils'

import './styles.css'

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
      <span>You lasted</span>
      <span style={{ fontStyle: 'italic' }}>
        {` ${lasted} `}
      </span>
      <span>...!</span>
    </div>
  )
}

const Whys = () => {
  const whys = [
    'Stay brown for 30 days, and THEN back to green...! :"}',
    // 'No MS #Edge, so no #NSFW contents',
    // 'No Safari, no saved files',
    // 'No #Paids, no #FreeAcademics',
    'Really, it makes me feel so tired sometimes...!',
    '🍀',
  ]

  return (
    <ul className="Whys">
      {whys.map((why, i) => (
        <li key={i}>• {why}</li>
      ))}
    </ul>
  )
}

const Wasted = () => {
  return (
    <a
      className="Wasted"
      href="https://github.com/hoangph271/useLasted"
      style={{ color: 'white' }}
    >
      @source_code
    </a>
  )
}

export default function App () {
  return (
    <div className="App">
      <Lasted />
      <Whys />
      <Wasted />
    </div>
  )
}
