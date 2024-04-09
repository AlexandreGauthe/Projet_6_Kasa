import React from "react";
import "../styles/Banner.scss"

export default function Banner(props) {
    return (
        <div className="banner">
            <h1 className="banner-title">{props.title}</h1>
        </div>
    )
}