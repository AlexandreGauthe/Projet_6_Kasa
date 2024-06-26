// Page d'acceuil //

import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import "../../styles/Home.scss";

export default  function Home() {
  return (
    <div className="app">
      <div className="app-top">
          <Header />
          <Banner title="Chez vous, partout et ailleurs"/>
      </div>
      <div className="app__app-grid">
          <Card />
      </div>
      <div className="home-footer"> 
        <Footer/>
      </div>    
    </div>  
  );
}


