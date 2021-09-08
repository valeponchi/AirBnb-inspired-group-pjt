import React from "react";

import styled  from "styled-components";
import {useHistory} from "react-router-dom"
import { Link } from "react-router-dom";

// For the on click to work properly make sure you add the city name to the alt of the image

function HomePageCard({className, GetAway}){

    

    const history = useHistory()
  
    return(
     <li className={className}>
            
        <img src={GetAway.url} alt="Durham" onClick={(e) => {
            const search = GetAway.name
            
            history.push(`/staysin/${search}`)}} className="pointer" />
        <h3>{GetAway.name}</h3>
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