

import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMdPerson} from "react-icons/io"






function BecomeAHost({className, userLoggedIn, setUserLoggedIn}){
    const history = useHistory()

    
    
    // function userLocation(){
    //     const location = history.location.pathname
    //     if(location.includes())
    // }
    
    return(
        <div className={className}>
            {userLoggedIn ?  <a onClick={() => { 
            setUserLoggedIn(false)
            fetch("http://localhost:4000/logout", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            history.push("/home")
        }} className="pointer">
            Logout
        </a> :  <a onClick={() => { 
            
            history.push("/hosting")
        }} className="pointer">
            Become a host
        </a>}
        
        <div className="accountPill">
            <GiHamburgerMenu className="icon"/>
            <IoMdPerson className="icon"/>
        </div>
    </div>
    )

}

export default styled(BecomeAHost)`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
   
    place-items: center;

    .accountPill{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 5px;
        border: 1px solid lightgrey;
        padding: 5px;
        border-radius: 30px;
    }

    .icon{
        font-size: 22px;
    }
    


`