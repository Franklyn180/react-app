# Exotic Cars Dealer (Practice App)

This repository contains a minimal Node.js + React (Vite) application for practicing deployment of a small web app.

Structure:

- `backend/` - Express API serving example exotic cars
- `frontend/` - Vite + React app that consumes the API

Quick start (two terminals):

1. Start backend:

```bash
cd backend
npm install
npm run start
```

2. Start frontend (in a different terminal):

```bash
cd frontend
npm install
npm run dev
```

Frontend dev server runs on `http://localhost:3000` and is proxied to the backend at `http://localhost:4000` for `/api` requests.

Build & deploy notes:
- Run `npm run build` inside `frontend` to create a static build you can deploy to any static host.
- Serve the API from any Node host (e.g., Render, Vercel Serverless function, Heroku) — update the frontend to point to the deployed API URL or configure a reverse proxy.
