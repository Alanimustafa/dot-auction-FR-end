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
                <h1 className="logoHeader">BACK LOT Home Page</h1>
                <h3 className="logoHeader">Vehicles inventory management system</h3>
                <Nav></Nav>
                <div className="VehiclesListContainerOnHomePage">
                    <VehicleList vehicles={vehicles}/>
                </div>
            </div>
        </>
    )
}

export default Home;