import React from 'react';
import ReactDOM from 'react-dom';


const fName = 'Ashish';
const lName = 'Thomas';

ReactDOM.render(
    <div>
        <h1> Hi { fName + " " + lName }! </h1>
        <p>Your Lucky Number is { Math.floor(Math.random() * 10) } </p>
        <br></br>
        <br></br>
        <br></br>
        <p>Created by { fName + " " + lName } </p>
        <p>Copyright&#169; { (new Date()).getFullYear() } </p>
    </div>,
    document.getElementById('root')
);