import React from "react";
// style
import "../style/Menu.css";


function Menu(){
    return <ul className="Menu">
        <li>About</li>
        <li>Services</li>
        <li>Blog</li>
        {/* <li><i className="fa fa-search" aria-hidden="true"></i></li> */}
        <li><span className="search"></span></li>
    </ul>;
} 

export default Menu;