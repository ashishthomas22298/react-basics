import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./style/index.css";

ReactDOM.render(
    <App />,
    document.getElementById('root')
);




//Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
