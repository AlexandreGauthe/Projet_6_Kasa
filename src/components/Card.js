import React from "react";
import logements from "../data/logements.json";
import "../styles/Card.scss";
import { Link } from "react-router-dom";

export default function Card(props) {
    return(
        logements.map((logement) =>(
            <div className="cards" key={logement.id} imageid={logement.id}>
            <Link  className="cards__carroussel-link" to={`/accomodations/${logement.id}`}><img src={logement.cover} alt={logement.title}></img> <p className="cards__cards-title">{logement.title}</p></Link>
            </div>    
        ))
    )
}