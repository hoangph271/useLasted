import { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'
import './styles.css'

const getLasted = () => {
  const startAt = new Date('2022/7/17 20:25')

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
    'No #Paids',
  ]

  return (
    <ul className="Whys">
      {whys.map((why, i) => (
        <li key={i}>• {why}</li>
      ))}
    </ul>
  )
}

export default function App() {
  return (
    <div className="App">
      <Lasted />
      <Whys />
    </div>
  )
}
