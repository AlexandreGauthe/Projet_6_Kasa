// Composant collapse qui est utilisé sur la page à propos et sur la page de la laocation choisie //

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import "../styles/Collapse.scss"
import { useState } from "react";

export default function Collapse (props){

    const [currentClass, setCurrentClass] = useState("label-block__content")
    const [aniamationActive, setAnimationActive] = useState(false);
 

    const handleClick = (event)=>{
        if(currentClass === "label-block__content"){
            setCurrentClass("label-block__content--visible")
            setAnimationActive(true)
            }else{
                setCurrentClass("label-block__content");
                setAnimationActive(false)
            }
    }
    return (
        <div  className="label-block">
            <p className="label-block__label" title={props.title}>{props.title}<FontAwesomeIcon className={"label-block__icone "+ (aniamationActive ? "rotate" : "")} icon={faChevronUp} onClick={handleClick} /> </p>
            <div className={currentClass}>
                <p id="text" content={props.content}>{props.content}</p>
            </div>    
        </div>
    )
}