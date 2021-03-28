import React from "react";

// style
import "../style/Section.css";

function Section(props){
    return <section className="Section" id = {props.id} style = {{  backgroundColor : props.color}}></section>;
}

export default Section;