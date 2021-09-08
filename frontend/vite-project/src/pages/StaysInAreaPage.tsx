import React, { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";

import styled from "styled-components";
import Header from "../components/Header";
import useStore, { Apartment } from "../store";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMapEvent,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import StaysInAreaCards from "../components/StaysInAreaCards";
import Footer from "../components/Footer";

const PageBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.50fr;

  .cards-title {
    align-self: center;
    padding-left: 1rem;
  }

  .cards {
    display: grid;

    height: 500px:
    width: 100%;

    overflow: scroll;

    padding: 1rem;
  }

  .map-container {
    height: 82vh;
    width: 100%;
    
    position: relative;
  }

  .map {
    height: 100vh;
  }

  .no-wrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  

  @media screen and (max-width: 1200px) {
    .map {
      display: none;
      width: auto;
    }
    .cards {
      width: 100vw;
    }
  }
`;

// animated panning
function SetViewOnClick({ animateRef }) {
  const map = useMapEvent("click", e => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || true,
    });
  });

  return null;
}

export default function StaysInAreaPage() {
  // Animated Panning

  const animateRef = useRef(true);

  let { search } = useParams();

  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/users/apartments/${search}`)
      .then(res => res.json())
      .then(data => setApartments(data));
  }, []);

  function toRender() {
    if (apartments.length > 0) {
      return (
        <MapContainer
          className="map"
          center={
            apartments.length > 0
              ? [
                  apartments[0].location[0].latitude,
                  apartments[0].location[0].longitude,
                ]
              : [0, 0]
          }
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {apartments.map((apartment, index) => (
            <Marker
              key={index}
              position={[
                apartment.location[0].latitude,
                apartment.location[0].longitude,
              ]}
            >
              <Popup className="center">
                <img
                  src={apartment.imageUrl1}
                  alt={apartment.id}
                  height="100px"
                  width="auto"
                />
                <br />${apartment.priceNight}
                <br />
                {apartment.city} {apartment.postCode}
              </Popup>
              <Tooltip>
                <strong>${apartment.priceNight}</strong>
              </Tooltip>
            </Marker>
          ))}
          <SetViewOnClick animateRef={animateRef} />
        </MapContainer>
      );
    } else {
      return <h4>No Apartments in set area</h4>;
    }
  }

  return (
    <>
      <Header />
      <PageBodyContainer>
        <div className="cards">
          <div className="cards-title">
            <h1>Airbnb's in {search}</h1>
          </div>
          <StaysInAreaCards apartments={apartments} />
        </div>
        <div className="map map-container">{toRender()}</div>
      </PageBodyContainer>
      <Footer />
    </>
  );
}
