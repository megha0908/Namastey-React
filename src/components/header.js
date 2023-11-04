import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");


// Function to handle the button click
    const handleButtonClick = () => {
        if (btnName === "Login") {
            setBtnName("Logout");
        }
        else {
            setBtnName("Login");
        }
    };

    return (
    <div className="header">
        <div className="logo">
            <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login" onClick={handleButtonClick}>
                        {btnName}
                    </button>
                </ul>
            </div>
    </div>
);

};
export default Header;