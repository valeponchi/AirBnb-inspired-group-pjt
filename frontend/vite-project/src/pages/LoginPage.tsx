import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

function LoginPage({className}){

    return(
        <div className={className}>
        <Header/>
        <main>
        <form className="loginForm container">
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button>Login</button>
        </form>
        </main>
        </div>

    )
}

export default styled(LoginPage)`

display: grid;
grid-template-rows: 120px 1fr;




.loginForm{
    display: grid;
    height: calc(100vh - 112px);
    place-items: center;
    align-content: center;
    grid-template-rows: repeat(3, 50px);
    grid-gap: 20px;
    
}

input, button{
    width: 400px;
    height: 50px;
    border-radius: 20px;
    border: 1px solid lightgrey;
    padding: 10px;
}




`