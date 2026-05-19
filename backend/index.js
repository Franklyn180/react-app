const express = require('express');
const cors = require('cors');
const cars = require('./data/cars.json');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Exotic Cars API',
    endpoints: ['/api/cars', '/api/cars/:id']
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/cars', (req, res) => {
  res.json(cars);
});

app.get('/api/cars/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const car = cars.find((c) => c.id === id);
  if (!car) return res.status(404).json({ error: 'Car not found' });
  res.json(car);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend listening on http://localhost:${port}`));
