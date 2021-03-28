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
        <div id="top"></div>
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

    // Sticky header

    let header = $("#Header");
    console.log(header);
    
    window.onscroll = function() {stickyHeader()};

    var sticky = header.outerHeight();
    
    function stickyHeader() {
        console.log(sticky + " " + window.pageYOffset);
      if (window.pageYOffset > sticky) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    }
});


export default App;