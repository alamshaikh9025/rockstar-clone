import React from "react";

export default function Card(props){
    return(
        <div className="cardcontainer">
        <div className="card">
            <img src={props.img} className="cardimage"/> 
            <div className="card-stats">
                <img src="../images/star.jpg" alt="star image" className="starimage"/>
                <span className="gray">{props.rating}</span>
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