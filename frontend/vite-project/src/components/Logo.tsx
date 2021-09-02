import React from "react";
import styled from "styled-components";

function Logo({className}){
    return(
        <img src="../src/assets/images/logo.png" alt="logo" className={className} />
    )
}

export default styled(Logo)`

    width: 150px


`