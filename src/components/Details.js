import React from "react";
import "../styles/Details.scss"

export default function Details(props){
    return(
        <div className="details-section">
            <div className="details-section__text-block">
                <h1 className="text-block__title">{props.titre}</h1>
                <p className="text-block__place">{props.location}</p>
            </div>    
            <div className="details-section__author">
                <p className="author__name">{props.name}</p>
                <img src={props.src} alt={`${props.name}`}></img>
            </div>
               
        </div>    
    )
}

