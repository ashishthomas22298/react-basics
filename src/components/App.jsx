import React from "react";
// components
import Header from "./Header.jsx";
import Section from "./Section.jsx";
import Footer from "./Footer.jsx";
// style
import "../style/App.css";

function App(){
    return <div className="app" >
        <Header />
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Footer />
    </div>;
}

export default App;