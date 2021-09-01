import React from "react";

import styled  from "styled-components";

function HomePageCard({className}){
    return(
        <li className={className}>
        <img src="../src/assets/images/homepageimage.jpeg" alt="" />
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