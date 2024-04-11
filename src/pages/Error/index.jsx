import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "../../styles/Error.scss"

export default  function Error() {
  return (
      <div className="error">
        <Header />
        <h1 className="error__title">404</h1>
        <p className="error__text"> Oups la page que vous demandez n'existe pas.</p>
        <Link className="error__link" to="/">Retourner à la page d'acceuil</Link>
        <Footer />
      </div>  
  );
}