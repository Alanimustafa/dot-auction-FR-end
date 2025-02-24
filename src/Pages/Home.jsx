import { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Pages.css"

// Importing Componenets
import Nav from "../Components/Nav";
import VehicleList from "../Components/VehicleList.jsx";

function Home () {
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
                <div className="mainpageHeaderBackBar">
                    <h1 className="logoHeader">BACK LOT </h1>
                    <h3 className="logoHeader">Vehicles inventory management system</h3>
                </div>
                <Nav></Nav>

                <div className="HomePageMainimageCentralContainer">
                    
                    <div className="HomaPageMainImageRightContainer">
                        <h1>Right Container</h1>
                    </div>
                    <div className="HomaPageMainImageLeftContainer">
                        <h1>Left Container</h1>
                    </div>
                </div>

                <div className="VehiclesListContainerOnHomePage">
                    <VehicleList vehicles={vehicles}/>
                </div>
            </div>
        </>
    )
}

export default Home;