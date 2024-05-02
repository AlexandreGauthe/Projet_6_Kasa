// Page d'erreur qui s'affiche en cas de route inexistante d'une part ou de l'ID d'une location introuvable d'autre part //
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
        <div className="error-block">
          <p className="error-block__error__text"> Oups la page que vous demandez n'existe pas.</p>
          <Link className="error-block__error__link" to="/">Retourner à la page d'acceuil</Link>
        </div>
        <div className="error-footer">  
          <Footer />
        </div>  
      </div>  
  );
}