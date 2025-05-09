import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 
// Routes Modules Imports
import Home from './Pages/Home.jsx'
import Compacts from './Pages/Compacts.jsx'
import Sedans from './Pages/Sedans.jsx'
import Suvs from './Pages/Suvs.jsx'
import Trucks from './Pages/Trucks.jsx'
import Vans from './Pages/Vans.jsx'
import Inventory from './Components/Inventory.jsx'
import VehicleDetails from './Pages/VehicleDetails.jsx'
import AddVehicleForm from "./Components/NewVehicle.jsx"
import VehicleUpdator from './Components/VehicleUpdator.jsx'
import DeleteVehicle from './Components/VehicleDelete.jsx'

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
        <Route path="/new" element={<AddVehicleForm />}></Route>

        {/* Vehicle Details Route */}
        <Route path="/details/:id" element={<VehicleDetails />}></Route>

        {/* Vehicle Updator Route */}
        <Route path="/update/:id" element={<VehicleUpdator />}></Route>

        {/* Delete Vehicle Route */}
        <Route path="/delete/:id" element={<DeleteVehicle />}></Route>

        {/* 404 Page Not Found Route */}
        <Route path="*" element={<h1>404: Page Not Found</h1>}></Route>

      </Routes>
    </Router>
  </StrictMode>,
)
