import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json"
import Details from "../../components/Details";
import Tag from "../../components/Tag";

export default  function Accomodations() {
  const  { imageid } = useParams();
  const selectedAccomodation = logements.find((logement) => logement.id === imageid);
  const {title,location,host,tags} = selectedAccomodation;

  return (
    <div>
      <Header />
      <Details titre={title} location={location} name={host.name} src={host.picture}/>
      <Footer />
    </div>  
  );
}