import React, { useEffect, useState } from 'react'
import CarList from './components/CarList'

export default function App() {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/cars')
      .then((r) => r.json())
      .then((data) => setCars(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="app">
      <header className="header">
        <h1>Exotic Cars Dealer</h1>
        <p>Shop performance, luxury, and electric supercars with transparent pricing.</p>
      </header>
      <main>
        {loading ? <p>Loading...</p> : <CarList cars={cars} />}
      </main>
    </div>
  )
}
