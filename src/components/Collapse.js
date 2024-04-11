import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import "../styles/Collapse.scss"
import { useState } from "react";

export default function Collapse (props){

    const [currentClass, setCurrentClass] = useState("label-block__content")

    const handleClick = (event)=>{
        if(currentClass === "label-block__content"){
            setCurrentClass("visible")
            }else{
                setCurrentClass("label-block__content");
            }
    }

    return (
        <div  className="label-block">
            <p className="label-block__label" title={props.title}>{props.title}<FontAwesomeIcon className="label-block__icone" icon={faChevronUp} onClick={handleClick} /> </p>
            <div className={currentClass}>
                <p content={props.content}>{props.content}</p>
            </div>    
        </div>
    )
}