import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Styles/VehicleDetails.css"

const VehicleDetails = () => {
    // Get the vehicle ID from URL params
    const { id } = useParams();

    // State to hold vehicle details
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track errors

    useEffect(() => {
        if (!id) return; // Prevent request if id is undefined

        axios.get(`http://localhost:3000/details/${id}`)
            .then((response) => {
                setVehicle(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching vehicle:", error);
                setError("Failed to load vehicle details.");
                setLoading(false);
            });

    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!vehicle) return <p>No vehicle found.</p>;

    return (
        <>
        <div className="VehicleDetailsPageMainContainer">
            
            <div className="VehicleDetailsPageVehicleMakeModel">
            <Link className="LinkToHomePage" to="/">Home</Link>
                <h3 className="VehicleDetailsPageHeader">{vehicle.year} - {vehicle.make} | {vehicle.model}</h3>
                <p className="VehicleDetailsPageHeader">VIN: {vehicle._id}</p>
                <p className="VehicleDetailsPageHeader">Trim: {vehicle.trim}</p>
                <p className="VehicleDetailsPageHeader">Color: {vehicle.color}</p>
                <p className="VehicleDetailsPageHeader">Fule type: {vehicle.fuel_type}</p>
                <p className="VehicleDetailsPageHeader">Milage: {vehicle.mileage} miles</p>
                <p className="VehicleDetailsPageHeader">Buyer: {vehicle.buyerName}</p>
                <p className="VehicleDetailsPageHeader">Seller: {vehicle.sellerName}</p>
                
            </div>

            <div className="VehicleDetailsPageVehicleImageContainer">
                <img className="CardVehicleImage" src={vehicle.image_url} alt="" />
            </div>

        </div>        
        </>

    );
};

export default VehicleDetails;