import { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Inventory.css"
import { Link } from "react-router-dom";

// Importing Components
import Nav from "../Components/Nav";

function Inventory () {
    const [vehicles, setVehicles] = useState([])

    // console.log(vehicles) // For test only.
    useEffect(()=>{
        axios.get("https://dot-auction-bk-end.onrender.com/")
        .then(response => {setVehicles(response.data)
           // console.log("Vehicle Data :",response.data);
        })
        .catch((error) => {console.error(error)})
    },[])
    return (
        <>
            <div className="PageMainContainer">
              
                <Nav></Nav>
                <div className="inventoryList">
                    <Link className="LinkToHomePage" to="/new">New Vehicle</Link>
                    <ul className="VehicleUnOrderedList">
                        <h3 className="InventoryManagerTitle">Inventory Manager</h3>
                        <h3 className="totalInventory">Current inventory: {vehicles.length} Vehicles</h3>
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