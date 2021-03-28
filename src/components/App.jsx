import React from "react";
import $ from "jquery";
// components
import Header from "./Header.jsx";
import Section from "./Section.jsx";
import Footer from "./Footer.jsx";
// style
import "../style/App.css";



function App(){
    return <div className="app" >
        <Header />
        <Section id="home" color = "red" ></Section>
        <Section id="about" ></Section>
        <Section id="services" ></Section>
        <Section id="blog" ></Section>
        <Section id="search" ></Section>
        <Footer />
    </div>;
}

$(window).on("load",function(){
    let firstSection = $("#home");
    firstSection.height( firstSection.height() - $("div.Header").outerHeight() );
});


export default App;