import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import './index.css'

import App from './App'
import Munnar from './pages/Munnar'
import Wayanad from './pages/Wayanad'
import Coorg from './pages/Coorg'
import Kodaikanal from './pages/Kodaikanal'
import Varkala from './pages/Varkala'
import Murudeshwara from './pages/Murudeshwara'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />

        <Route
          path="/munnar"
          element={<Munnar />}
        />

        <Route
          path="/wayanad"
          element={<Wayanad />}
        />

        <Route
          path="/coorg"
          element={<Coorg />}
        />

        <Route
          path="/kodaikanal"
          element={<Kodaikanal />}
        />

        <Route
          path="/murudeshwara"
          element={<Murudeshwara />}
        />

        <Route
          path="/varkala"
          element={<Varkala />}
        />

      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)