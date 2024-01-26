import React from "react";
import rockstar from "../images/header.png"

export default function Navbar(){
    return(
        <nav >
            <img src={rockstar} alt="Image Rockstar"  className="rockstarimage" />
            <h1>Hello</h1>
        </nav>
    )
}

