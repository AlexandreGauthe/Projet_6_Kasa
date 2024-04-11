import React from "react";
import logements from "../data/logements.json";
import "../styles/Card.scss"

export default function Card(props) {
    return(
        logements.map((logement) =>(
            <div className="cards" key={logement.id}>
               <p className="cards__title">{logement.title}</p>    
            </div>    
        ))
    )
}