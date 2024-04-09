import React from "react";
import logoFooter from "../assets/LOGO_foot.png";
import "../styles/Footer.scss"

export default function Footer(){
    return (
       <footer> 
            <img src={logoFooter} alt="Logo du pied de page"></img>
            <p>© 2020 Kasa. All rights reserved  </p>        
       </footer>
    )
}