import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import "../styles/Collapse.scss"
import { useState } from "react";

export default function Collapse (props){
    
    return (
        <div  className="label-block" key={props.key}>
            <p className="label-block__label" title={props.title}>{props.title}<FontAwesomeIcon className="label-block__icone" icon={faChevronUp} /> </p>
            <div className="label-block__content">
                <p content={props.content}>{props.content}</p>
            </div>    
        </div>
    )
}