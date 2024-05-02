// Composant des mots-clés assosciés aux locations //

import React from "react";
import "../styles/Tag.scss";

export default function Tag(props){
    return(
        <p className="tag" tag={props.tag}>{props.tag}</p>
    )
}