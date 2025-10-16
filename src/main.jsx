import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SpeedInsights } from '@vercel/speed-insights/react' // ✅ import bản React
import { Analytics } from "@vercel/analytics/react" // ✅ đúng
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
    <Analytics />
  </React.StrictMode>,
)
