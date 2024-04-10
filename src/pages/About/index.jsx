import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import "../../styles/About.scss"
import img from "../../assets/img2.png";
import AboutCollapse from "../../components/AboutCollapse";

export default  function About() {
   
  return (
     <div> 
        <Header />
        <Banner title="" style= {{backgroundImage : `url(${img})`}} />
        <div className="collapse-block">
         <AboutCollapse/>
        </div>  
        <Footer />
     </div>       
  );
}