// importing Link
import { Link } from "react-router-dom";

// import Vehicle Card Style
import "./Styles/VehicleCard.css"


const VehicleCard = ({vehicle}) => {

    console.log(`The Vehicle Details received from Vehicle Items page ${vehicle._id}`); // Only For Test.

    return (
        <>
            <div className="VehicleCardMainContainer">
                
                <div className="VehicleHeaderCard">
                    <h3 className="VehicleHeader">{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}</h3>
                </div>
                
                <div className="VehicleImageContainer">
                    <img className="CardVehicleImage" src={vehicle.image_url} alt="" />
                </div>

                <div className="VehicleCardInformation">
                    <h4 className="VehicleCardInformationPrice"> Price : ${vehicle.price}</h4>
                    <h5 className="VehicleCardInformationMileage">Mileage: {vehicle.mileage} miles</h5>
                </div>
                
            </div>
        </>
    )
}

export default VehicleCard;