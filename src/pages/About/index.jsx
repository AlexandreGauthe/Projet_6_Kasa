import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import img from "../../assets/img2.png";
import AboutMaker from "../../components/AboutMaker";
import "../../styles/About.scss"
export default  function About() {
   
  return (
     <div className="screen"> 
        <Header />
        <Banner style= {{backgroundImage : `url(${img})`}} />
        <div className="collapse-block">
         <AboutMaker/>
        </div>  
        <Footer style={{position: "absolute", bottom:"0px", left:"0px",right:"0px"}}/>
     </div>       
  );
}