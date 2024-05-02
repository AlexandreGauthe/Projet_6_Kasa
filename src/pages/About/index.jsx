// Pages à propos //

import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import img from "../../assets/img2.png";
import AboutMaker from "../../components/AboutMaker";
import "../../styles/About.scss"
export default  function About() {
   
  return (
     <div> 
        <Header />
        <Banner style= {{backgroundImage : `url(${img})`, filter:"brightness(0.7)"}} look={{padding:"0px"}} />
        <div className="collapse-block">
         <AboutMaker/>
        </div>
        <div className="footer-block"> 
          <Footer style={{margin:"50px,50px,50px,50px"}}/>
        </div>  
      </div>       
  );
}