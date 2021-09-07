import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PropertyCardImage({className}){
    return(
        <Link to="#" className={className}>
        <div className="pictureCard">
        <img src="src/assets/images/logo.png"/> 
    </div></Link>
    )
}

export default styled(PropertyCardImage)`

.pictureCard{
    width: 250px;
    height: 250px;
    border: 1px solid lightgrey;
    border-radius: 20px;
}

img{
    overflow: fill;
    width: 100%;
    height: 100%:
}


`