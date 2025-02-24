import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Pages.css";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";

function Trucks () {
    const [vehicles, setVehicles] = useState([]);

    console.log("The Truck Vehicles :", vehicles);
    useEffect(()=>{
        axios.get("http://localhost:3000/")
        .then( response => {
                const filterVehiclesType = response.data.filter( vehicle => vehicle.type === "TRUCK")
                setVehicles(filterVehiclesType);
        })
        .then((error) => {console.error(error)})
    },[])
    return (
        <>
            <div className="CatPageMainContainer">
                
                    <h1 className="logoHeader">BACK LOT</h1>
                    <h3 className="logoHeader">Vehicles inventory management system</h3>
                    <Nav></Nav>
                    <h2 className="VehicleTypeCategoryHeader">TRUCKS</h2>

                    <div className="CatVehcilesDisplayContainer">

                        {vehicles.map( (vehicle) => (
                            <div key={vehicle._id} className="VehicleCardMainContainer">
                    
                            <div className="VehicleImageContainer">
                                <img className="CardVehicleImage" src={vehicle.image_url} alt="" />
                            </div>
            
                            <div className="VehicleHeaderCard">
                                <h4 className="VehicleHeader">{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}</h4>
                            </div>
                            
                            <div className="VehicleCardInformation">
                                <p className="VehicleCardInformationMileage">Mileage: {vehicle.mileage} miles</p>
                                <p className="VehicleCArdInformationColor">Color: {vehicle.color}</p>
                                <h4 className="VehicleCardInformationPrice"> Price : ${vehicle.price}</h4>
                            </div>
            
                            <div className="VehicldeDetails">
                                <Link className="LinkToVehicleDetails" to={`/details/${vehicle._id}`}>
                                    <h4 className="VehicleDetailsHeader">Vehicle Details</h4>
                                </Link>
                            </div>
                            
                        </div>
                        ))}

                        
                    </div>

              
            </div>
        
        </>
    )
}

export default Trucks;