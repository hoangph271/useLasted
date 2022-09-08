import { useLasted } from '../hooks'

export const Lasted = () => {
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
