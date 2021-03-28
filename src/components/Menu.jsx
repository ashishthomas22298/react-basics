import React from "react";
// style
import "../style/Menu.css";


function Menu(){
    return <ul className="Menu">
        <li><a href="#about" >About</a></li>
        <li><a href="#services" >Services</a></li>
        <li><a href="#blog" >Blog</a></li>
        <li><a href="#search" ><span className="search"></span></a></li>
    </ul>;
} 

export default Menu;