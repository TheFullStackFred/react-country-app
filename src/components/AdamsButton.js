import { useState } from 'react'

export default function AdamsButton(props) {
  const [value, setValue] = useState(props.startValue)

  const handleClick = (event) => {
    console.log(event)
    console.log('Event handled')
    setValue((value) =>
      value === 'Tackat nej?' ? props.startValue : 'Tackat nej?'
    )
  }

  return (
    <input
      type="button"
      className="glow-on-hover"
      onClick={handleClick}
      value={value}
    ></input>
  )
}
