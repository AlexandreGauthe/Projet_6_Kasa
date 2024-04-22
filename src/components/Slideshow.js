import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import "../styles/Slideshow.scss"

export default function Slideshow(props,nextOnClick,prevOnClick) {
    return(
        <div className="slideshow-block">
            <FontAwesomeIcon className="slideshow-block__left-icon" onClick={props.prevOnClick} icon={faChevronLeft} style={props.style}/>
            <img src={props.src} alt={props.alt}></img>
            <FontAwesomeIcon className="slideshow-block__right-icon" onClick={props.nextOnClick} icon={faChevronRight} style={props.style}/>
            <span className="slideshow-block__count" count={props.count}>{props.count}</span>
        </div>
    )
}
