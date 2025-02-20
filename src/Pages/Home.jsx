import { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Pages.css"
import Nav from "../Components/Nav";

function Home () {
    const [vehicles, setVehicles] = useState([])

    console.log(vehicles)
    useEffect(()=>{
        axios.get("http://localhost:3000/")
        .then(response => {setVehicles(response.data)
           // console.log("Vehicle Data :",response.data);
        })
        .catch((error) => {console.error(error)})
    },[])
    return (
        <>
            <h1 className="logoHeader">BACK LOT Home Page</h1>
            <h3 className="logoHeader">Vehicles inventory management system</h3>
            <Nav></Nav>
        </>
    )
}

export default Home;