import React from "react";
import styled from "styled-components"
import {useHistory} from "react-router-dom"




function HomePage({className}){

    const history = useHistory()

    return(
        <div className={className}>
        <header className="container">
        <img src="../src/assets/images/logo.png" alt="logo" className="airbnbLogo" />
        <nav>
        <a onClick={() => {
            history.push("/placestostay")
        }}>
            Place to stay
        </a>
        </nav>
        <div className="rightColumn">
            <a onClick={() => {
                history.push("")
            }}>
                Become a host
            </a>
            <div className="currentLoggedIn">
                Logged in as Guest
            </div>
        </div>
        </header>
        <img src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560" className="backgroundImage"/>
        <main className="container">
           
        <form>
            <input type="text" className="searchBar" placeholder="Where you going?"/>
        </form>
        <h1>
        Not sure where to go? Perfect.
        </h1>
        <a className="flexibleButton" onClick={() => {
            history.push("/placestostay")
        }}>Im flexible</a>
       
            
        </main>
        <footer>  
           text
        </footer>
        </div>
    )
}

export default styled(HomePage)`

    display: grid;
    grid-template-rows: 150px 500px 100px;
   
    position: relative;
   
  

    header{
        display: grid;
        grid-template-columns: 150px 1fr 200px;
        align-content: center;
        color: white;
    }

    .airbnbLogo{
        width: 150px
    }

    nav{
        display: grid;
        place-content: center;
        color: white;
    }

    .currentLoggedIn{
        padding: 10px;
        border: 1px solid white;
        
    }

    .rightColumn{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
       
        place-items: center;
    

    }

 
    .backgroundImage{
       position: absolute;
       top: 0;
        left: 0;
       z-index: -100;
      width: 100vw;
       height: calc(100vh - 75px);
    }

    main{
        display: grid;
        place-items: center;
       
    

    }



    .searchBar{
        background-color: white;
        width: 500px;
        padding: 10px;
        border: none;
        border-radius: 20px;

    }

    form{
        align-self: start;
    }
    input{
        margin-right: 50px;
    }

    h1{
       align-self: center;
       color: black;
       margin-right: 50px;
    }

    .flexibleButton{
        display: grid;
        place-items: center;
        background-color: white;
        height: 75px;
        width: 200px;
        border-radius: 50px;
        margin-right: 50px;
        font-size: 1.2rem;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
       
    }

`