import React from 'react'
import Clock from 'react-live-clock'

export default function Time() {
  return (
    <Clock
      className="clock"
      format={'HH:mm:ss'}
      ticking={true}
      timezone={'Europe/Stockholm'}
    />
  )
}
