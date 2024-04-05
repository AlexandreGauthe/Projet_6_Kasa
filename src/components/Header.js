import React from "react";
import logo from "../assets/LOGO.png"
import { Link } from "react-router-dom";
import "../styles/Header.scss"
export default function Header(){

    return (
        <header>
            <img className="logo" src={logo} alt="Logo de Kasa"></img>
            <nav className="menu">
                <Link className="link" to="/">Acceuil</Link>
                <Link className="link" to="/about">A propos</Link>
            </nav>
        </header>    
    )
}