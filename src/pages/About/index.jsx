import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import "../../styles/About.scss"
import img from "../../assets/img2.png";
import AboutMaker from "../../components/AboutMaker";

export default  function About() {
   
  return (
     <div className="screen"> 
        <Header />
        <Banner style= {{backgroundImage : `url(${img})`}} />
        <div className="collapse-block">
         <AboutMaker/>
        </div>  
        <Footer />
     </div>       
  );
}