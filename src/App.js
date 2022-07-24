import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './views/Home'
import Countries from './views/Countries'
import Country from './views/Country'
import Contact from './views/Contact'
import About from './views/About'
import Footer from './UI/Footer'
import Navbar from './UI/Navbar'
import SomeContext from './components/SomeContext'

export default function App() {
  const [data, setData] = useState([])
  const [searchCountry, setSearchCountry] = useState('')

  const getData = async () => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/all`)
    //Random 200 countries
    const totalShownCountries = 201
    const picked = []
    for (let i = 0; i < totalShownCountries; i++) {
      const index = Math.floor(Math.random() * data.length)
      const removed = data.splice(index, 1)
      picked.push(removed[0])
    }
    setData(picked)
    console.log('Visible countries', picked)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    data && (
      <div className='App'>
        <SomeContext.Provider
          value={
            <h2>
              <input
                className='search-country'
                placeholder='Search Country...'
                onChange={(event) => {
                  setSearchCountry(event.target.value)
                }}
              />
              <ul id='countries-ul'>
                {data
                  .filter((country) => {
                    if (searchCountry === '') {
                      return country
                    } else if (
                      country.name.common
                        .toLowerCase()
                        .includes(searchCountry.toLowerCase())
                    )
                      return country
                  })
                  .map((country) => (
                    <li className='li-card' key={country.name.common}>
                      <Link to={`/country/${country.name.common}`}>
                        {country.name.common}
                      </Link>
                    </li>
                  ))}
              </ul>
            </h2>
          }
        >
          <BrowserRouter>
            <Navbar />
            <main className='App-main'>
              <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Countries />} path='/countries' />
                <Route element={<Country />} path='/country/:id' />
                <Route element={<Contact />} path='/contact' />
                <Route element={<About />} path='/about' />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </SomeContext.Provider>
      </div>
    )
  )
}
