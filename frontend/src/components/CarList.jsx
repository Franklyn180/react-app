import React from 'react'

function formatPrice(price, currency = 'USD') {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(price)
}

const PLACEHOLDER_SVG = `data:image/svg+xml;utf8,` + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'>` +
    `<rect width='100%' height='100%' fill='%230b1220'/>` +
    `<text x='50%' y='50%' fill='%2394a3b8' font-family='Arial,Helvetica,sans-serif' font-size='20' text-anchor='middle' dy='.3em'>Image not available</text>` +
  `</svg>`
)

export default function CarList({ cars }) {
  if (!cars || cars.length === 0) return <p>No cars available.</p>

  return (
    <div className="grid">
      {cars.map((car) => (
        <div className="card" key={car.id}>
          <div className="img-wrap">
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = PLACEHOLDER_SVG
              }}
            />
            <div className="price-badge">{formatPrice(car.price, car.currency)}</div>
          </div>

          <div className="card-body">
            <h2>{car.make} {car.model}</h2>
            <p className="year">{car.year}</p>
            <p className="desc">{car.description}</p>
            <div className="actions">
              <button className="btn">Inquire</button>
              <button className="btn ghost">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
