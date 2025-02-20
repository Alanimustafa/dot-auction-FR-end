import { useState, useEffect } from "react";
import axios from "axios";

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
        <h1>Home Page</h1>
        </>
    )
}

export default Home;