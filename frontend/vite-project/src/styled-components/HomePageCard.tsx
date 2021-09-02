import React from "react";

import styled  from "styled-components";
import {useHistory} from "react-router-dom"

// For the on click to work properly make sure you add the city name to the alt of the image

function HomePageCard({className}){

    const history = useHistory()
    return(
        <li className={className}>
        <img src="../src/assets/images/homepageimage.jpeg" alt="Durham" onClick={(e) => {
            const search = e.target.alt
            
            history.push(`/staysin/${search}`)}} />
        <h3>Getaways</h3>
    </li>
  
    )
}

export default styled(HomePageCard)`

   

 img{
     width: 100%;
     height: 350px;
     border-radius: 20px;
 }

 h3{
     font-size: 1.4rem !important;
     font-weight: 500 !important;
 }


`