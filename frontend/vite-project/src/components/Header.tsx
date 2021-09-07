import React from "react";
import styled from "styled-components";
import BecomeAHost from "./BecomeAHost";
import Logo from "./Logo";
import SearchBar from "./SearchBar";



function Header({className}){
    return(
        <header className={className}>
            <div className="container headerStyle">
            <Logo/>
            <div className="search">
            <SearchBar/>
            </div>
            <BecomeAHost/>
            </div>
        </header>
    )
}

export default styled(Header)`

border-bottom: 1px solid lightgrey;

.headerStyle{
    display: grid;
grid-template-columns: repeat(3,1fr);
width: 80%;
margin-left: auto;
margin-right: auto;
place-items: center;
grid-gap: 20px;
}

.search{
    place-self: center; !important;

}

.search input{
    border: 1px solid lightgrey;
}

.currentLoggedIn{
    border: 1px solid lightgrey;
}


`