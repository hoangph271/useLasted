export const Whys = () => {
  const whys = [
    'Stay brown for 30 days, and THEN back to green...! :"}',
    'Really, it makes me feel so tired sometimes...!',
    '🍀'
  ]

  return (
    <ul className="Whys">
      {whys.map((why, i) => (
        <li key={i}>• {why}</li>
      ))}
    </ul>
  )
}
