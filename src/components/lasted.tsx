import { useLasted } from '../hooks'

export const Lasted = () => {
  const [lasted, progress] = useLasted()

  return (
    <div className="Lasted">
      <span>You lasted</span>
      <span style={{ fontStyle: 'italic' }}>
        {` ${lasted} [${progress}%]...!`}
      </span>
    </div>
  )
}
