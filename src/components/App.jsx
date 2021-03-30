import React from "react";
import $ from "jquery";
// components
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
// style
import "../style/App.css";



function App(){
    return <div className="app" >
        <div id="top"></div>
        <Header />
        <section className="JumbotronContainer" id = "home">
          <div className="Jumbotron">

          </div>
        </section>
        <section id = "about"></section>
        <section id = "services"></section>
        <section id = "blog"></section>
        <section id = "search"></section>

        <Footer />
    </div>;
}

$(window).on("load",function(){

    let firstSection = $("#home");
    console.log(firstSection.height() + " " +  $("#Header").outerHeight());
    firstSection.height( firstSection.height() - $("#Header").outerHeight() );

    // Sticky header

    let header = $("#Header");
    
    window.onscroll = function() {stickyHeader()};

    var sticky = (header.outerHeight());
    
    function stickyHeader() {
      if (window.pageYOffset > sticky) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    }
});


export default App;