import React from "react";
import "../styles/Banner.scss"

export default function Banner(props) {
    return (
        <div className="banner" style = {props.style}>
            <h1 style={props.look}className="banner-title">{props.title}</h1>
        </div>
    )
}