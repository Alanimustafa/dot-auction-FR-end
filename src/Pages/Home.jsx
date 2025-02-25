import { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Pages.css";

// Importing Components
import Nav from "../Components/Nav";
import VehicleList from "../Components/VehicleList.jsx";


function Home() {
    const [vehicles, setVehicles] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        axios.get("https://dot-auction-bk-end.onrender.com/")
            .then(response => {
                setVehicles(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        if (vehicles.length === 0) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [vehicles]);

    return (
        <div className="PageMainContainer">
            <div className="mainpageHeaderBackBar">
                <h1 className="logoHeader">BACK LOT</h1>
                <h3 className="logoHeader">Vehicles Inventory Management System</h3>
            </div>
            <Nav />

            <div className="HomePageMainimageCentralContainer">
                <div className="HomaPageMainImageLeftContainer">
                    <h1 className="backLotLeftHeaderH1">BACK LOT MOTORS</h1>
                    <h3 className="backLotLeftHeaderH3">Inventory Management System</h3>
                </div>
                <div className="HomaPageMainImageRightContainer">
                    {vehicles.length > 0 && ( 
                        <>
                            <h4 className="imageLoopVehiclesInfo">{vehicles[currentImageIndex].year} - {vehicles[currentImageIndex].make} {vehicles[currentImageIndex].model}</h4>
                            <img 
                                src={vehicles[currentImageIndex].image_url} 
                                alt="Vehicle" 
                                className="ImageLoopContainer"
                            />
                        </>
                    )}
                </div>
            </div>

            <div className="HomePageAllVehicleHeaderContainer">
                <h2 className="HomePageListHeader">All Vehicles</h2>
            </div>

            <div className="VehiclesListContainerOnHomePage">
                <VehicleList vehicles={vehicles} />
            </div>
        </div>
    );
}

export default Home;
