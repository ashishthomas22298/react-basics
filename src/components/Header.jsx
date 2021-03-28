import React from "react";
// components
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";
import LoginBtns from "./LoginBtns.jsx";
//style 
import "../style/Header.css";

function Header(){
    return <div className="Header">
        <div className="Navbar">
        <Logo></Logo>
        <Menu></Menu>
        <LoginBtns></LoginBtns>
        </div>
    </div>
    ;
}

export default Header;