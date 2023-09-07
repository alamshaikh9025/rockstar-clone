import React from "react"
import sale from "../images/sale.jpg"

export default function Hero() {
    return (
        <section className="heropage ">
            <img src={sale} className="gridimage"/>
            <div className="slang">
            <hr />
            <h1 className="gridheader">Rockstar Games</h1>
            <p className="gridpara"><i>Bringing Gaming to Life</i></p>
            </div>
        </section>
    )
}