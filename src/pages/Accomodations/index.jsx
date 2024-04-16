import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json"
import Details from "../../components/Details";
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";
import Slideshow from "../../components/Slideshow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import "../../styles/Accomodations.scss"

export default  function Accomodations() {
  const  { imageid } = useParams();
  const selectedAccomodation = logements.find((logement) => logement.id === imageid);
  const {title,location,host,tags, rating, description, equipments,pictures} = selectedAccomodation;
  const range = [1, 2, 3, 4, 5];
  const [selectedPicture, setSelectedPicture] = useState(0);
  
  const nextPictOnClick = (event) =>{
    selectedPicture <= pictures.length -2 ? setSelectedPicture(selectedPicture + 1) : setSelectedPicture(0);
  }
  const prevPictOnclick = (event) =>{
    selectedPicture >=  1 ? setSelectedPicture(selectedPicture - 1) : setSelectedPicture(selectedPicture + pictures.length -1)
  }
  
  return (
    <div>
      <Header />
      <Slideshow src={pictures[selectedPicture]} alt={title} count={`${selectedPicture +1} / ${pictures.length}`} nextOnClick={nextPictOnClick} prevOnClick={prevPictOnclick}/>
      <Details titre={title} location={location} name={host.name} src={host.picture}/>
      <div className="ranking">
        <div className="ranking__tag-box">
          {tags.map ((tag,index) => 
          <Tag  key={`${tag}-${index}`} tag={tag}/>)}
        </div>
        <div className="ranking__stars-box">
          {range.map((rangeElem, index) => rating >= rangeElem? <FontAwesomeIcon key={`${rangeElem}-${index}`} icon={faStar} className="star__icone_on"/> : <FontAwesomeIcon key={`${rangeElem}-${index}`} icon={faStar} className="star__icone_off"/>)}
        </div>
      </div>
      <div className="collapse-box">
            <Collapse title="Description" content={description}/>
            <Collapse title="Equipement"  content={equipments.map((equip,index) =>
              <li key={`${equip}-${index}`}>{equip}</li>)}/>
      </div>
      <Footer />
    </div>  
  );
}