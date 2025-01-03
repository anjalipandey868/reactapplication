import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
const Header = () => {

    const [btnname , setbtnname] = useState("Login")

    return (
        <div className="header">
            <div className="logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3eoFkNXp_XW10JFPm80NEQR3lbEN9V8aIA&s"/>
            </div>
            <div className="navItems">
             <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login-btn" 
                    onClick={()=>{btnname === "login"? setbtnname("logout"):setbtnname("login")}}>
                    {btnname}
                    </button>
             </ul>
            </div>
        </div>
    )
}
export default Header;