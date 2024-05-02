// Composant du pied de page présent dans toutes les pages //

import React from "react";
import logoFooter from "../assets/LOGO_foot.png";
import "../styles/Footer.scss"

export default function Footer(props){
    return (
       <footer style={props.style}> 
            <img src={logoFooter} alt="Logo du pied de page"></img>
            <p>© 2020 Kasa. All rights reserved  </p>        
       </footer>
    )
}