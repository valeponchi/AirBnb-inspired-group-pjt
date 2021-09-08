import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {BsPlusCircle} from "react-icons/bs"
import {BiUpArrowAlt, BiCalendar} from "react-icons/bi"
import PropertyCardImage from "../components/PropertyCardImage";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function HostDashBoardPage({className}){


    // Get current user ID
    const [currentUserId, setCurrentUserId] = useState(1);
    const [hostedProperties, setHostedProperties] = useState([]);
    let amountOfProperties = 0
    //Fetch with user id

    useEffect(() => {
        fetch(`http://localhost:4000/users/${currentUserId}/apartments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        }).then(resp => resp.json()).then(data => setHostedProperties([data]))
    },[])
   
    function loadingContent(){
        if(hostedProperties.length === 1 ){
            const limitAparments = hostedProperties[0].data[0].apartmentOwned.slice(0, 4)
            amountOfProperties = limitAparments.length

            return(
                <>
                {limitAparments.map(apartment => {
                    return(
                        <PropertyCardImage Apartment={apartment}  key={limitAparments.postCode}/>
                    )
                })}
                
                </>
            )
        }
        else{
            return(
                <h1>Loading Properties</h1>
            )
        }
    }



    return(
        <div className={className}>
            <Header/>
            <main className="container">
                <ul>
                   <li>
                       <a href="#AddHostedProperty">Add Hosted Property</a>
                       </li>
                       <li>
                       <a href="#ReviewHostedProperty">Review Hosted Property</a>
                       </li>
                       <li>
                       <a href="#ViewBookings">View Bookings</a>
                       </li>
                </ul>

                <h3>Welcome To Host Dashboard</h3>
                <section className="hostedProperty" id="AddHostedProperty">
                    <h3>Add Hosted Property</h3>
                    <div className="card">
                        <p>Click Add Button</p>
                        <Link to="/addhostproperty"><BsPlusCircle className="plusIcon"/></Link>
                    </div>

                </section>
                <section className="reviewHostedProperty" id="ReviewHostedProperty">
                    <h3>Review Hosted Properties</h3>
                    <div className="pictureCardContainer">
                      
                    {loadingContent()}
                    
                   
                             
                   
                    
                    </div>
               
             
               </section>
                <section id="ViewBookings" className="viewBookings">
                    <h3>View Bookings</h3>
                    <div className="bookingsCardsContainer">
                    <div className="bookingCard">
                    <BiUpArrowAlt className="icon"/>
                    <p>+£1500</p>

                    </div>
                    <div className="bookingCard">
                    <BiCalendar className="icon"/>
                    <p>Calender</p>
                        
                    </div>
                    <div className="bookingCard">
                     <p>{amountOfProperties} Properties Hosted</p>
                    </div>
                    </div>

                    
             </section>
            </main>
            <Footer/>
        </div>


    )
}

export default styled(HostDashBoardPage)`
display: grid;

grid-gap: 30px;


ul{
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
    place-content: center;
   
}

li{
    display: inline-block;
    place-self: center;
}

a{
    text-decoration: none;
    color: black;
    text-align: center;
}

.pictureCardContainer{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
    grid-gap: 20px;
}

main{
    display: grid;
    grid-gap: 30px;
    
}

h3{
    place-self: center;
    font-size: 1.5rem;
}

.card{
    border: 1px solid lightgrey;
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 20px;
    display: grid;
    place-content: center;
    place-items: center;
}

.card p{
    font-size: 1.5rem;
}

.plusIcon{
    position: absolute;
    top: -3%;
    right: -3%;
    font-size: 2rem;
    background-color: white;
    z-index: 10;
    
}

.plusIcon:hover{
    fill: green;
    
}

.reviewHostedProperty{
    display: grid;
    grid-gap: 20px;
}

.reviewHostedProperty h3{
    place-self: start;
}

.hostedProperty{
    display: grid;
    grid-gap: 20px;
}

.hostedProperty h3{
    place-self: start;
}

.bookingsCardsContainer{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

}

.bookingCard{
    width: 350px;
    height: 200px;
    border: 1px solid lightgrey;
    display: grid;
    place-content: center;
    place-items: center;
    border-radius: 20px;
    

}

.bookingCard .icon{
    font-size: 4rem;
}

.bookingCard p{
    font-size: 1.5rem;
}

.viewBookings{
    display: grid;
    grid-gap: 20px;
}

.viewBookings h3{
    place-self: start;
}



`