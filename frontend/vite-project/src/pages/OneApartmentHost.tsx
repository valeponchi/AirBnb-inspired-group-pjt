import React from "react";

import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {CgScreen} from "react-icons/cg"
import {GiGrass, GiGymBag, GiCookingPot} from "react-icons/gi"
import {FaHotTub, FaParking, FaSwimmingPool, FaWifi} from "react-icons/fa"


import AirBnbLogo from "../assets/images/logo.png"
 function OneApartment({ className, userLoggedIn, setUserLoggedIn }) {

  const [apartment, setApartment] = useState({})
  const params = useParams();


    useEffect(() => {
      fetch(`http://localhost:4000/users/${params.id}/apartments/${params.apartmentId}`, {
        method: "GET",
        headers: {
          'Content-Type' : 'application/json',
        },
        credentials: 'include',
      }) .then(resp => resp.json()).then(data => {
        setApartment(data.data[0].apartmentOwned[0])
      })
      
    },[setApartment])

    function loadingExtras(){
      if(apartment.extra === undefined){
        return(
          <li>Loading Extras</li>
        )
      }
      else{
        return(
        <ul>
            {apartment.extra.smartTV ? <li >Smart TV <CgScreen className="icon"/></li> : <li>Smart TV <CgScreen className="icon greyOut"/></li> }
          {apartment.extra.garden ? <li >Garden <GiGrass className="icon"/></li> : <li>Garden <GiGrass className="icon greyOut"/></li> }
          {apartment.extra.gym ? <li >Gym <GiGymBag className="icon"/></li> : <li>Gym <GiGymBag className="icon greyOut"/></li> }
          {apartment.extra.hotTub ? <li >HotTub <FaHotTub className="icon"/></li> : <li>HotTub <FaHotTub className="icon greyOut"/></li> }
          {apartment.extra.microwave ? <li >MicroWave <GiCookingPot className="icon"/></li> : <li>MicroWave <GiCookingPot className="icon greyOut"/></li> }
          {apartment.extra.parkingSpace ? <li >Parking Space<FaParking className="icon"/></li> : <li>Parking Space <FaParking className="icon greyOut"/></li> }
          {apartment.extra.pool ? <li >Swimming Pool<FaSwimmingPool className="icon"/></li> : <li>Swimming Pool <FaSwimmingPool className="icon greyOut"/></li> }
          {apartment.extra.wifi ? <li >Wifi<FaWifi className="icon"/></li> : <li>Wifi <FaWifi className="icon greyOut"/></li> }
         
        
        
        </ul>
        
        
        )
      }
    }


  return(
    <>
    <Header userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>
     <main className={className}>
       <h1>AirBnb Room / {params.postCode}</h1>
       <ul>
           <li>
             <a href="#Reviews">Reviews</a>
           </li>
           <li>
             <a href="#Location">Location Information On Room</a>
           </li>
           
         </ul>
         {console.log(apartment)}
         <section className="roomImagesSection">
             <img src={apartment.imageUrl1} alt="" className="bigImage" />
           <div className="smallerImagesContainer">
           
             <img src={apartment.imageUrl2} alt="" className="smallImage" />
             <img src={apartment.imageUrl3} alt="" className="smallImage" />
             <img src={apartment.imageUrl1} alt="" className="smallImage" />
             <img src={AirBnbLogo} alt="" className="smallImage" />
            
           </div>
         </section>
         <h3 className="center">Room Information</h3>
         <section className="airBnbInformationSection">
      
           <div className="extras">
             <div>{loadingExtras()}</div>
           </div>
           <div className="roomDescription">
             <h4>About Room</h4>
             <h3>£{apartment.priceNight} Per Night</h3>
             <p>{apartment.description}</p>
           </div>
 
         </section>
 
     </main>
     <Footer/>
 
     </> 

    
  )

 }
  
  export default styled(OneApartment)`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
    place-content: center;
  }

  .center{
    text-align: center;
  }

  li {
    display: inline-block;
    place-self: center;
  }

  .roomDescription{
    display: grid;
    grid-template-rows: 20px 20px 1fr;
    grid-gap: 20px;
  }

 

  .extras ul {
    
    display: grid !important;
    justify-content: start !important;
    grid-gap: 10px !important;
    grid-template-columns: auto !important;

  }

  .airBnbInformationSection{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

  }

  .extras li {
    display: grid;
    grid-template-columns: 150px 25px;
    align-items: center;
    font-size: 1.5rem;
   grid-gap: 20px;

    
  }

  .icon{
    font-size: 1.75rem;
  }

  .greyOut{
    fill: lightgrey;
  }


  a {
    text-decoration: none;
    color: black;
    text-align: center;
  }

  .roomImagesSection{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    height: 400px;
  }

  .smallerImagesContainer{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
    height: 400px;
  }



  .bigImage,  .smallImage{
    width: 100%;
    height: 100%;
    border: 1px solid lightgrey;
  }
  

  .smallImage{
    overflow: hidden;
  }

 
  
  
  
  `
