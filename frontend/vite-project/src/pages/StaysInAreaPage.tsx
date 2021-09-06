import React, { useEffect, useRef } from "react";
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
import { useHistory } from "react-router";

const PageBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.75fr;

  .cards {
    display: grid;

    height: 100vh:
    width: 100%;
  }

  .map {
    height:100vh;
    width: 100%;
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

  let apartmentsBySpecificLocation = useStore(
    store => store.apartmentsBySpecificLocation
  );

  console.log(apartmentsBySpecificLocation);

  const center = [
    apartmentsBySpecificLocation[0].location[0].latitude,
    apartmentsBySpecificLocation[0].location[0].longitude,
  ];

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <PageBodyContainer>
        <div className="cards">Cards</div>
        <MapContainer
          className="map"
          center={center}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {apartmentsBySpecificLocation.map((apartment, index) => (
            <Marker
              key={index}
              position={[
                apartment.location[0].latitude,
                apartment.location[0].longitude,
              ]}
            >
              <Popup>
                {apartment.postCode}
                <br />
                <img
                  src={apartment.imageUrl1}
                  alt={apartment.id}
                  height="100px"
                />
              </Popup>
              <Tooltip>{apartment.description}</Tooltip>
            </Marker>
          ))}
          <SetViewOnClick animateRef={animateRef} />
        </MapContainer>
      </PageBodyContainer>
    </>
  );
}
