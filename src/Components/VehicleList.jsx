// Importing the each Vehicle Card from the VehicleCard component
import VehicleCard from "./VehicleCard.jsx";

// import Style
import "./Styles/VehicleList.css"

// importing Link
import { Link } from "react-router-dom";

const VehicleList = ({ vehicles }) => {
    if (!vehicles || vehicles.length === 0) {
        return <div>No vehicles available</div>;
    }

    // console.log(`The Vehicle List received from Main page ${vehicles[0]}`); // Only For Test.
    return (
        <>
            <div className="VehicleListMainContainer">
                {vehicles.map(vehicle => (
                    <VehicleCard key={vehicle._id} vehicle={vehicle} />
                ))}
            </div>
        </>
    );
};

export default VehicleList;