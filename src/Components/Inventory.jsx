import { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/inventory.css"
import { Link } from "react-router-dom";

// Importing Components
import Nav from "../Components/Nav";
import VehicleList from "../Components/VehicleList.jsx";

function Inventory () {
    const [vehicles, setVehicles] = useState([])

    // console.log(vehicles)
    useEffect(()=>{
        axios.get("http://localhost:3000/")
        .then(response => {setVehicles(response.data)
           // console.log("Vehicle Data :",response.data);
        })
        .catch((error) => {console.error(error)})
    },[])
    return (
        <>
            <div className="PageMainContainer">
                <h1 className="logoHeader">BACK LOT Home Page</h1>
                <h3 className="logoHeader">Vehicles inventory management system</h3>
                <Nav></Nav>
                <div className="inventoryList">
                    <Link className="LinkToHomePage" to="/new">New Vehicle</Link>
                    <ul className="VehicleUnOrderedList">
                        <h3 className="InventoryManagerTitle">Inventory Manager</h3>
                        
                        {vehicles.map(vehicle => (
                            <li key={vehicle._id} className="InventoryVehiclesList">
                                <div className="ImageAndYearModelMake">
                                    <img className="ListedVehicleImage" src={vehicle.image_url} alt="" />
                                    {vehicle.year} {vehicle.make} {vehicle.model} - {vehicle.trim} - VIN: {vehicle._id}
                                </div>
                                <div className="VehicleInventoryViewDetailsContainer">
                                    <Link className="LinkToVehicleDetails" to={`/details/${vehicle._id}`}>
                                        <p className="VehicleDetailsHeader">Vehicle Details</p>
                                    </Link>
                                </div>    
                                
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Inventory;