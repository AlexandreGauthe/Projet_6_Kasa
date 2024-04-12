import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json"
import Details from "../../components/Details";


export default  function Accomodations() {
  const { imageid } = useParams();
  const currentImage = logements.filter(logement =>
    logement.id === imageid)
    console.log(currentImage);
  
  return (
    <div>
      <Header />
      <Details title={currentImage.title}/>
      <Footer />
    </div>  
  );
}