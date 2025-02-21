import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div className="VehicleDetailsMainContainer">
            <Link className="LinkToHomePage" to="/">Home</Link>
            <h3 className="VehicleDetailsHeader">{vehicle.year}</h3>
            <h3 className="VehicleDetailsHeader">{vehicle.make} {vehicle.model}</h3>
        </div>
    );
};

export default VehicleDetails;