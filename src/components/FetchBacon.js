import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FetchBacon() {
  const [bacon, setBacon] = useState([])
  const getData = async () => {
    const { data } = await axios.get(
      `https://baconipsum.com/api/?type=meat-and-filler`
    )
    setBacon(data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    bacon && (
      <div style={{ width: '80vw', color: 'white' }}>
        {bacon.map((bacon) => (
          <p key={bacon}>{bacon}</p>
        ))}
      </div>
    )
  )
}
