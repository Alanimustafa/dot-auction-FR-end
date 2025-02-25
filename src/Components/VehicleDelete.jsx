import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Styles/VehicleDelete.css";

// Delete Vehicle Function
const DeleteVehicle = () => {
    const { id } = useParams(); // Using Params to idetify the selected vehicle by its id.
    const [vehicle, setVehicle] = useState(null); // Vehicle State setter.
    const [loading, setLoading] = useState(true); // Page Loading setter.
    const [error, setError] = useState(null); // Error Loading State setter.
    const [deleted, setDeleted] = useState(false); // Vehicle remove state.

    useEffect(() => {
        axios.get(`https://dot-auction-bk-end.onrender.com/details/${id}`)
            .then(response => {
                setVehicle(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching the vehicle:", error);
                setError("Failed to fetch vehicle details.");
                setLoading(false);
            });
    }, [id]);

    const deleteSelectedVehicle = () => {
        axios.delete(`https://dot-auction-bk-end.onrender.com/delete/${id}`)
            .then(() => {
                setDeleted(true);
            })
            .catch(error => {
                console.error("Error deleting the vehicle:", error);
                setError("Failed to delete the vehicle.");
            });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!vehicle) return <p>No vehicle found.</p>;

    return (
        <div className="DeleteVehiclePageMainContainer">
            <h1 className="logoHeader">BACK LOT Home Page</h1>
            <h3 className="logoHeader">Vehicles Inventory Management System</h3>
            <h4 className="DeleteVehicleHeader">REMOVE VEHICLE / {vehicle.year} - {vehicle.make} - {vehicle.model}</h4>

            {!deleted ? (
                <div className="DeletedVehicleConfirmationContainer">
                    <h3 className="RemovingVehicleHeader">Removing.. </h3>
                    <p className="DeletigWarning">⚠️ Are you sure you want to remove the {vehicle.year} - {vehicle.make} {vehicle.model} from the inventory?</p>

                    <div className="RemovingVehicleConfirmationBTNs">
                        <button onClick={deleteSelectedVehicle} className="deleteButton">
                            Yes, remove vehicle
                        </button>
                        <Link className="CancelToHomePage" to="/">Cancel</Link>

                    </div>

                </div>
            ) : (
                <div className="confirmDeletion">
                    <h3 className="RemovedConfirmationHeader">{vehicle.year} - {vehicle.make} {vehicle.model} has been removed from inventory</h3>

                    <div className="RedirectBTNsContainer">
                        <Link className="DelConfLinkToHomePage" to="/">HOME</Link>
                        <Link className="LinkToInventoryPage" to="/inventory">Inventory</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeleteVehicle;
