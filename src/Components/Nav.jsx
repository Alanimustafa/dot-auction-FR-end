import { Link } from "react-router-dom";
import "./Styles/Nav.css"

function Nav () {
    return (
        <>
        <div className="mainpageHeaderBackBar">
                <h1 className="logoHeader">BACK LOT</h1>
                <h3 className="logoHeader">Vehicles Inventory Management System</h3>
        </div>
        <div className="NavigationBar">
            

            <nav className="NavMainContainer">

                {/* HOME Page Navegation Link */}
                <Link className="NavLink" to="/">
                    <p>HOME</p>
                </Link>

                {/* Compact Vehicles Page Navegation Link */}
                <Link className="NavLink" to="/compacts">
                    <p>Comapcts</p>
                </Link>

                {/* Sedan Vehicles Page Navegation Link */}
                <Link className="NavLink" to="/sedans">
                    <p>Sedans</p>
                </Link>

                {/* SUV Vehicles Page Navegation Link */}
                <Link className="NavLink" to="/suvs">
                    <p>SUVs</p>
                </Link>

                {/* VAN Vehicles Page Navegation Link */}
                <Link className="NavLink" to="/vans">
                    <p>VANs</p>
                </Link>

                {/* Truck Vehicles Page Navegation Link */}
                <Link className="NavLink" to="/trucks">
                    <p>Trucks</p>
                </Link>
            </nav>

            <nav className="InventoryManager">
                <Link className="InventoryLink" to="/inventory">
                    <p>Inventory Manager</p>
                </Link>
            </nav>
        </div>
 


        
        </>
    )
}

export default Nav;