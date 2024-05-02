// Générateur de collapse de la page à propos //

import React from "react";
import Collapse from "./Collapse";
import collapsesList from "../data/about-content.json"

    export default function AboutMaker() {

        return(
            collapsesList.map((collapse, index) =>(
                <Collapse key={`${collapse}-${index}`}title={collapse.title} content={collapse.content}/>  
            ))
        )
    }