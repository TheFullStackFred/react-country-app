import { useContext } from 'react'
import SomeContext from './SomeContext'

export default function SomeComponent() {
  const someValue = useContext(SomeContext)

  return <div>{someValue}</div>
}
