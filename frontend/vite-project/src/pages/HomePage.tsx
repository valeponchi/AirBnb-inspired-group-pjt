import React from "react";
import styled from "styled-components"
import {useHistory} from "react-router-dom"
import HomePageCard from "../styled-components/HomePageCard";



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
        
        <main className="container">
           <section className="topSection">
           <img src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560" className="backgroundImage"/>
        <form>
            <input type="text" className="searchBar" placeholder="Where you going?"/>
        </form>
        <div className="headingWithButton">
        <h1>
        Not sure where to go? Perfect.
        </h1>
        <a className="flexibleButton" onClick={() => {
            history.push("/placestostay")
        }}>Im flexible</a>
        </div>
       
        </section>
        <section className="liveAnywhereSection">
         <h3>Live anywhere</h3>
         <ul>
           <HomePageCard/>
           <HomePageCard/>
           <HomePageCard/>
           <HomePageCard/>
         </ul>
        </section>

        <section className="tryHosting">
            <div className="tryHostingImage">
                <img className="image-3" src="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg"/>
                <div className="imageText">
                    <h4>Try Hosting</h4>
                    <a onClick={() => {
                        history.push("/hosting")
                    }}>Host</a>
                    </div>
                
                </div>
        </section>
   
            
        </main>
        <footer>  
           text
        </footer>
        </div>
    )
}

export default styled(HomePage)`

    display: grid;
    grid-template-rows: 150px 1fr 100px;
   
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

    .headingWithButton{
        display: grid;
        place-items: center;
        place-self: center;
        grid-gap: 30px;
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

    .topSection{
        display: grid;
        height: calc(100vh - 200px);
        grid-template-rows: 100px 1fr;
    }

 .liveAnywhereSection{
        display: grid;
       
        width: 100%;
        grid-gap: 30px;

    }

    h3{
        place-self: start;
        font-size: 2rem;
        
    }

    ul{
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 366px));
        grid-gap: 20px;
    }

    .tryHosting{
        margin-top: 100px;
        width: 100%;
        height: 500px;
        margin-bottom: 60px;
       
    }

    .tryHostingImage{
        width: 100%;
        display: grid;
        overflow: hidden;
        height: 500px;
        border-radius: 20px;
        position: relative;
        
        
    }

    
    .image-3 {
        width: 100%;
  display: block;
  object-fit: none;
        object-fit: fill;
        z-index: -5;
      }

      .imageText{
          color: white;
          position: absolute;
          
          top: 40%;
          left: 100px;
          display: grid;
          grid-gap: 20px;
      }

      .imageText h4{
        font-size: 3rem; 
      }

      .imageText a {
          display: grid;
          text-decoration: none;
          background-color: white;
          padding: 20px;
          width: 100px;
          place-items: center;
          place-self: center;
          border-radius: 20px;
          color: black;
      }

   

`