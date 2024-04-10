import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import "../styles/Collapse.scss"

export default function Collapse (props){
    return (
        <div  className="label-block" key={props.key}>
            <p className="label" title={props.title}>{props.title}<FontAwesomeIcon className="icone" icon={faChevronUp} /> </p>
            <div className="content">
                <p content={props.content}>{props.content}</p>
            </div>    
        </div>
    )
}