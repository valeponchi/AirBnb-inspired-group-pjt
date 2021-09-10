

import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMdPerson} from "react-icons/io"
import {AiOutlineCloseCircle} from "react-icons/ai"
import { useState } from "react";






function BecomeAHost({className, userLoggedIn, setUserLoggedIn, userId}){
    const history = useHistory()

    const [open, setOpen] = useState(false)


    const hamBurgerIcon = <GiHamburgerMenu className="icon"/>
    const closeIcon = <AiOutlineCloseCircle className="icon"/>
    
    
    // function userLocation(){
    //     const location = history.location.pathname
    //     if(location.includes())
    // }
    
    return(
        <div className={className}>
            {/* {userLoggedIn ?  <a onClick={() => { 
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
        </a>} */}
        {open && 
        <nav className="navigation">
            <ul className="nav">
                <li>
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
            
            history.push("/login-host")
        }} className="pointer">
            Login
        </a>}
                </li>
                <li>
                {userLoggedIn ?  <a onClick={() => { 
            setUserLoggedIn(false)
            history.push(`/dashboard/${userId}`)
        }} className="pointer">
           Host Dashboard
        </a> :  <a onClick={() => { 
            
            history.push("/hosting")
        }} className="pointer">
            Become a host
        </a>}
                </li>
            </ul>

        </nav> }
        
        <div className="accountPill" onClick={() => setOpen(!open)}>
            {open ? closeIcon : hamBurgerIcon }
            <IoMdPerson className="icon"/>
        
    
        </div>
        

        
        
    </div>
    )

}

export default styled(BecomeAHost)`

    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 25px;
   
    place-items: center;

    .accountPill{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 5px;
        border: 1px solid lightgrey;
        padding: 5px;
        border-radius: 30px;
        cursor: pointer;
    }

    .icon{
        font-size: 22px;
    }


   .nav{
       list-style: none;
       display: grid;
       grid-template-columns: repeat(2,1fr);
       grid-template-rows: 1fr;
       grid-gap: 10px;

   }

    li{
        display: inline-block;
    }
    


`