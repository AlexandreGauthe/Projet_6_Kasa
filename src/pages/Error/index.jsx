import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import "../../styles/Error.scss"

export default  function Error() {
  return (
      <div>
        <Header />
        <h1 className="error-title">404</h1>
        <p className="error-text"> Oups la page que vous demandez n'existe pas.</p>
        <Link className="error-link" to="/">Retourner à la page d'acceuil</Link>

      </div>  
  );
}