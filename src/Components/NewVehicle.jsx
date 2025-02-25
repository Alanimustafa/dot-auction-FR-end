import { useState } from "react";
import axios from "axios";
import "./Styles/NewVehicle.css"
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

// New Vehicle function
const AddVehicleForm = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    condition: "",
    type: "Vehicle",
    year: 2025,
    make: "",
    model: "",
    trim: "",
    color: "",
    price: "",
    mileage: "",
    fuelType: "",
    image_url: "",
    isAWD: "false",
    is4X4: "false",
    isElectrical: "false",
    isHybrid: "false",
    buyerName: "",
    sellerName: "",
    buy_date: ""
  });

  // Handle the changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // submision of the imput data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/newvehicle/", {
        ...formData,
        year: Number(formData.year),
        isAWD: formData.isAWD === "true",
        is4X4: formData.is4X4 === "true",
        isElectrical: formData.isElectrical === "true",
        isHybrid: formData.isHybrid === "true",
      });
      console.log("Vehicle added:", response.data);
      alert("Vehicle successfully added!");
      nav('/');
    } catch (error) {
      console.error("Error adding vehicle:", error);
      alert("Failed to add vehicle");
    }
  };

  return (
    <>

    <div className="AddNeVehicleMainContainer">
        <div className="AddNewVehicleHeader">
            <h1 className="logoHeader">BACK LOT Home Page</h1>
            <h3 className="logoHeader">Vehicles inventory management system</h3>
        </div>
        <div className="AddNewVehicleNavBarContainer">
            <Nav></Nav>
        </div>
        <h3 className="AddnewVehicleMainTitle">New Vehicle</h3>
        <div className="AddNewVehicleFormContainer">
            <form className="NewVehicleForm" onSubmit={handleSubmit}>

                <div className="NewVehicleFormFields">

                    <div className="NewVehicleFormFirstSet">
                    <label className="NewVehicleLabels">Condition</label>
                    <select name="condition" value={formData.condition} onChange={handleChange}>
                        <option value="New">NEW</option>
                        <option value="Used">USED</option>
                    </select>

                    <label className="NewVehicleLabels">TYPE</label>
                    <select name="type" value={formData.type} onChange={handleChange}>
                        <option value="COMPACT">COMPACT</option>
                        <option value="SEDAN">SEDAN</option>
                        <option value="SUV">SUV</option>
                        <option value="VAN">VAN</option>
                        <option value="TRUCK">TRUCK</option>
                    </select>


                    <label className="NewVehicleLabels">Year :</label>
                    <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" required />

                    <label className="NewVehicleLabels">MAKE</label>
                    <select name="make" type="text" value={formData.make} onChange={handleChange}>
                        <option value="ACURA">Acura</option>
                        <option value="BMW">BMW</option>
                        <option value="CADILAC">Cadilac</option>
                        <option value="CHEVROLET">Chevrolet</option>
                        <option value="CHRYSLER">Chrysler</option>
                        <option value="DODGE">Dodge</option>
                        <option value="FORD">Ford</option>
                        <option value="GMC">GMC</option>
                        <option value="HONDA">Honda</option>
                        <option value="HYUNDAI">Hyundai</option>
                        <option value="JEEP">Jeep</option>
                        <option value="KIA">Kia</option>
                        <option value="LINCOLIN">Lincolin</option>
                        <option value="MAZDA">Mazda</option>
                        <option value="MERCEDES-BENZ">Mercedes-Benz</option>
                        <option value="MITSUBISHI">Mitsubishi</option>
                        <option value="NISSAN">Nissan</option>
                        <option value="SUBARU">Subaru</option>
                        <option value="SUZIKI">Suzuki</option>
                        <option value="TESLA">Tesla</option>
                        <option value="TOYOTA">Toyota</option>
                        <option value="VOLKSWAGON">Volkswagon</option>
                    </select>


                    <label className="NewVehicleLabels">Model :</label>
                    <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Model" required />

                    <label className="NewVehicleLabels">Trim :</label>
                    <input type="text" name="trim" value={formData.trim} onChange={handleChange} placeholder="Trim" />

                    <label className="NewVehicleLabels">Color</label>
                    <select name="color" type="text" value={formData.color} onChange={handleChange}>
                        <option value="BLACK">Black</option>
                        <option value="WHITE">White</option>
                        <option value="GRAY">Gray</option>
                        <option value="BLUE">Blue</option>
                        <option value="SILVER">Silver</option>
                        <option value="GREEN">Green</option>
                        <option value="SILVER">Silver</option>
                        <option value="MAROON">Maroon</option>
                    </select>

                    <label className="NewVehicleLabels">Price :</label>
                    <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />

                    <label className="NewVehicleLabels">Mileage :</label>
                    <input type="text" name="mileage" value={formData.mileage} onChange={handleChange} placeholder="Mileage" required />

                    <label className="NewVehicleLabels">Fuel Type :</label>
                    <select name="fuelType" type="string" value={formData.fuelType} onChange={handleChange}>
                        <option value="GGASOLIN">GASOLIN</option>
                        <option value="DIESEL">DISEL</option>
                    </select>

                    </div>
                    <div className="NewVehicleFormSecondtSet">
                    <label className="NewVehicleLabels">Image URL :</label>
                    <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} placeholder="Image URL" />

                    <label className="NewVehicleLabels">Buyer full name :</label>
                    <input type="text" name="buyerName" value={formData.buyerName} onChange={handleChange} placeholder="Buyer Name" />

                    <label className="NewVehicleLabels">Seller :</label>
                    <input type="text" name="sellerName" value={formData.sellerName} onChange={handleChange} placeholder="Seller Name" />

                    <label className="NewVehicleLabels">Date :</label>
                    <input type="date" name="buy_date" value={formData.buy_date} onChange={handleChange} />

                    <label className="NewVehicleLabels">A WD:</label>
                    <select name="isAWD" value={formData.isAWD} onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>

                    <label className="NewVehicleLabels">4X4:</label>
                    <select name="is4X4" value={formData.is4X4} onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>

                    <label className="NewVehicleLabels">Electrical:</label>
                    <select name="isElectrical" value={formData.isElectrical} onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>

                    <label className="NewVehicleLabels">Hybrid:</label>
                    <select name="isHybrid" value={formData.isHybrid} onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>                    
                    </div>

                </div>
                
                 <div className="NewVehicleAddBTNContainer">
                    <button className="NewVehicleAddBTN" type="submit">Add Vehicle</button>
                </div>
                
            </form>    

        </div>
    </div>
    </>
  );
};

export default AddVehicleForm;
