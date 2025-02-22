// Imports
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Styles/VehicleUpdator.css"
import { Link } from "react-router-dom";


// The VehicleUpdator Functoin
const VehicleUpdator = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // using the useEffect to get the data.
    useEffect(()=>{
        if (!id) return;

        axios.get(`http://localhost:3000/details/${id}`)
        .then ( response => {
            setVehicle(response.data); // The Vehicle data setter
            setLoading(false);  // The loading Setter.
        });
    },[id])

    // Setting the change in the property
    const handleChange = (e) => {
        setVehicle({...vehicle, [e.target.name] : e.target.value})
    }

    // Submission function for the changes
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/update/${id}`, vehicle)
            .then(() => {
                alert("Vehicle updated successfully");
                navigate(`/details/${id}`); // Going back to the Vehicle details pagee.
            })
            .catch(error => {
                console.error("Error updating vehicle:", error);
                setError("Failed to update vehicle.");
            });
    };

    // if the page loading 
    if (loading) return <p>Loading...</p>;

    // if the process get an error
    if (error) return <p>{error}</p>;

    
    return (
        <>
        <div className="VehicleUpdatorPageMainContainer">
            <h1 className="logoHeader">BACK LOT Home Page</h1>
            <h3 className="logoHeader">Vehicles inventory management system</h3>
            <h4 className="VehicleUpdatorHeader">Vehicle Information Update</h4>
            <form className="NewVehicleForm" onSubmit={handleSubmit}>

                <div className="NewVehicleFormFields">

                    <div className="NewVehicleFormFirstSet">
                    <label className="NewVehicleLabels">Condition</label>
                    <select name="condition" value={vehicle.condition || ''} onChange={handleChange}>
                        <option value="New">NEW</option>
                        <option value="Used">USED</option>
                    </select>

                    <label className="NewVehicleLabels">TYPE</label>
                    <select name="type" value={vehicle.type  || ''} onChange={handleChange}>
                        <option value="COMPACT">COMPACT</option>
                        <option value="SEDAN">SEDAN</option>
                        <option value="SUV">SUV</option>
                        <option value="VAN">VAN</option>
                        <option value="TRUCK">TRUCK</option>
                    </select>


                    <label className="NewVehicleLabels">Year :</label>
                    <input type="number" name="year" value={vehicle.year  || ''} onChange={handleChange}/>

                    <label className="NewVehicleLabels">Make :</label>
                    <input type="text" name="make" value={vehicle.make  || ''} onChange={handleChange}/>

                    <label className="NewVehicleLabels">Model :</label>
                    <input type="text" name="model" value={vehicle.model  || ''} onChange={handleChange}/>

                    <label className="NewVehicleLabels">Trim :</label>
                    <input type="text" name="trim" value={vehicle.trim  || ''} onChange={handleChange}/>

                    <label className="NewVehicleLabels">Color :</label>
                    <input type="text" name="color" value={vehicle.color  || ''} onChange={handleChange}/>

                    <label className="NewVehicleLabels">Price :</label>
                    <input type="text" name="price" value={vehicle.price  || ''} onChange={handleChange}/>

                    <label className="NewVehicleLabels">Mileage :</label>
                    <input type="text" name="mileage" value={vehicle.mileage  || ''} onChange={handleChange} />

                    <label className="NewVehicleLabels">Fuel Type :</label>
                    <select name="fuelType" type="string" value={vehicle.fuelType  || ''} onChange={handleChange}>
                        <option value="GGASOLIN">GASOLIN</option>
                        <option value="DIESEL">DISEL</option>
                    </select>

                    </div>
                    <div className="NewVehicleFormSecondtSet">
                    <label className="NewVehicleLabels">Image URL :</label>
                    <input type="text" name="image_url" value={vehicle.image_url  || ''} onChange={handleChange}/>

                    <label className="NewVehicleLabels">Buyer full name :</label>
                    <input type="text" name="buyerName" value={vehicle.buyerName  || ''} onChange={handleChange} />

                    <label className="NewVehicleLabels">Seller :</label>
                    <input type="text" name="sellerName" value={vehicle.sellerName  || ''} onChange={handleChange} />

                    <label className="NewVehicleLabels">Date :</label>
                    <input type="date" name="buy_date" value={vehicle.buy_date  || ''} onChange={handleChange} />

                    <label className="NewVehicleLabels">A WD:</label>
                    <select name="isAWD" value={vehicle.isAWD  || ''} onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>

                    <label className="NewVehicleLabels">4X4:</label>
                    <select name="is4X4" value={vehicle.is4X4  || ''} onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>

                    <label className="NewVehicleLabels">Electrical:</label>
                    <select name="isElectrical" value={vehicle.isElectrical  || ''} onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>

                    <label className="NewVehicleLabels">Hybrid:</label>
                    <select name="isHybrid" value={vehicle.isHybrid  || ''} onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>                    
                    </div>

                </div>

                <div className="NewVehicleAddBTNContainer">
                    <button className="NewVehicleAddBTN" type="submit">Update Vehicle</button>
                    <Link className="CancelLink" to="/">Cancel</Link>
                </div>

                </form>   
        </div>
        </>
    )
}

export default VehicleUpdator;

