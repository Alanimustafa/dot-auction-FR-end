import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './index.css'
import App from './App.jsx'

// Routes Modules Imports
import Home from './Pages/Home.jsx'
import Compacts from './Pages/Compacts.jsx'
import Sedans from './Pages/Sedans.jsx'
import Suvs from './Pages/Suvs.jsx'
import Trucks from './Pages/Trucks.jsx'
import Vans from './Pages/Vans.jsx'
import Inventory from './Components/Inventory.jsx'
import NewVehicle from './Components/NewVehicle.jsx'
import VehicleDetails from './Pages/VehicleDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>

        {/* Home Page Route */}
        <Route path="/" element={<Home />}></Route>

        {/* Compact Vehicles Route */}
        <Route path="/compacts" element={<Compacts />}></Route>

        {/* Sedan Vehicles Route */}
        <Route path="/sedans" element={<Sedans />}></Route>


        {/* SUV Vehicles Route */}
        <Route path="/suvs" element={<Suvs />}></Route>


        {/* VAN Vehicles Route */}
        <Route path="/vans" element={<Vans />}></Route>


        {/* Trucks Vehicles Route */}
        <Route path="/trucks" element={<Trucks />}></Route>


        {/* Inventory Manager Route */}
        <Route path="/inventory" element={<Inventory />}></Route>

        {/* Adding New Vehicle Route */}
        <Route path="/new" element={<NewVehicle />}></Route>

        {/* Vehicle Details Route */}
        <Route path="/details/:id" element={<VehicleDetails />}></Route>

      </Routes>
    </Router>
  </StrictMode>,
)
