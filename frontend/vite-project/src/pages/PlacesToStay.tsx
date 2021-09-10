import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FlexibleApartments from "../components/FlexibleApartments";
import FlexibleMap from "../components/FlexibleMap";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { GrMapLocation } from "react-icons/gr";
import { AiOutlineUnorderedList } from "react-icons/Ai";

const FlexibleDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;

  height: 100vh;

  .to-be-relative {
    display: grid;
    position: relative;
  }

  .flexible-main-button {
    background: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    height: 4rem;

    padding: 1rem;
    margin: 0 auto;

    font-size: 1.5rem;

    border: 2px solid black;
    border-radius: 25px;

    box-shadow: 4px 2px 2px grey;

    background-color: white;

    position: fixed;
    bottom: 90px;

    z-index: 1000;
  }
`;

export default function Flexible({ className }) {
  const [map, setMap] = useState(false);

  const handleClick = () => {
    if (map === false) setMap(true);
    else setMap(false);
  };

  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/users/apartments/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => {
        setApartments(data);
      });
  }, []);

  return (
    <FlexibleDiv>
      <Header className={className} />

      <div className="to-be-relative">
        {map === false ? (
          <FlexibleApartments
            handleClick={handleClick}
            apartments={apartments}
          />
        ) : (
          <FlexibleMap handleClick={handleClick} apartments={apartments} />
        )}

        {map === false ? (
          <button
            className="flexible-main-button"
            onClick={() => handleClick()}
          >
            Show Map <GrMapLocation />
          </button>
        ) : (
          <button
            className="flexible-main-button"
            onClick={() => handleClick()}
          >
            Show List <AiOutlineUnorderedList />
          </button>
        )}
      </div>
      <Footer />
    </FlexibleDiv>
  );
}
