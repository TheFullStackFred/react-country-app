import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Driver() {
  const [data, setData] = useState([])

  const { id } = useParams()

  const getData = async () => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/name/${id}?fullText=true`
    )
    console.log('Selected country', data)
    setData(data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    data &&
    data.map((country) => (
      <div className="div-container" key={country.name.common}>
        <div className="country-card">
          <h2>Name: {country ? country.name.common : 'Loading . . .'}</h2>
        </div>
        {
          <div className="country-card">
            <h2>Capital: {country ? country.capital : 'Loading . . .'}</h2>
          </div>
        }

        {
          <div className="country-card">
            <h2>
              Population: {country ? country.population : 'Loading . . .'}
            </h2>
          </div>
        }
        {
          <div className="country-card">
            <h2>Region: {country ? country.region : 'Loading . . .'}</h2>
          </div>
        }

        {
          <div className="country-card">
            <h2>Flag: {country ? country.flag : 'Loading . . .'}</h2>
          </div>
        }
        {
          <div className="country-card">
            <h2>
              Languages:{' '}
              {country.languages?.eng ? country.languages?.eng + ' ' : ''}
              {country.languages?.spa ? country.languages?.spa + ' ' : ''}
              {country.languages?.fra ? country.languages?.fra + ' ' : ''}
              {country.languages?.nrf ? country.languages?.nrf + ' ' : ''}
              {country.languages?.ita ? country.languages?.ita + ' ' : ''}
              {country.languages?.sqi ? country.languages?.sqi + ' ' : ''}
              {country.languages?.dan ? country.languages?.dan + ' ' : ''}
              {country.languages?.khm ? country.languages?.khm + ' ' : ''}
              {country.languages?.ara ? country.languages?.ara + ' ' : ''}
              {country.languages?.heb ? country.languages?.heb + ' ' : ''}
              {country.languages?.ron ? country.languages?.ron + ' ' : ''}
              {country.languages?.swe ? country.languages?.swe + ' ' : ''}
              {country.languages?.jpn ? country.languages?.jpn + ' ' : ''}
              {country.languages?.tha ? country.languages?.tha + ' ' : ''}
              {country.languages?.aze ? country.languages?.aze + ' ' : ''}
              {country.languages?.rus ? country.languages?.rus + ' ' : ''}
              {country.languages?.sin ? country.languages?.sin + ' ' : ''}
              {country.languages?.tam ? country.languages?.tam + ' ' : ''}
              {country.languages?.fas ? country.languages?.fas + ' ' : ''}
              {country.languages?.kal ? country.languages?.kal + ' ' : ''}
              {country.languages?.ber ? country.languages?.ber + ' ' : ''}
              {country.languages?.mey ? country.languages?.mey + ' ' : ''}
              {country.languages?.por ? country.languages?.por + ' ' : ''}
            </h2>
          </div>
        }
      </div>
    ))
  )
}
