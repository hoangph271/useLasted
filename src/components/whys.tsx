export const Whys = () => {
  const whys = [
    'Stay brown for 30 days, and THEN back to green...! :"}',
    'Really, it makes me feel so tired sometimes...!',
    'Cuz you\'ve been well behaved for the last 9 days, keep it going...! 🍀'
  ]

  return (
    <ul className="Whys">
      {whys.map((why, i) => (
        <li key={i}>• {why}</li>
      ))}
    </ul>
  )
}
