import React from "react";
import star from "../images/star.png"

export default function Card(props){
    return(
        <div className="cardcontainer">
        <div className="card">
            <img src={props.img} className="cardimage"/> 
            <div className="card-stats">
            <span className="gray">{props.rating}</span>
            <img src={star} alt="star image" className="starimage"/>
            <span className="gray">{props.country}</span>                
            </div>
            <div className="namemoney">
            <p>{props.gamename}</p>
            <p><span className="money">{props.amount}</span>/ purchase</p>
            </div>
        </div>
        </div>
        
    )
}