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

const PageBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.75fr;

  .cards {
    display: grid;

    height: 100vh:
    width: 100%;
    background-color: blue;
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

  let { search } = useParams();

  const [apartments, setApartments] = useState([]);
  const [whatever, setWhatever] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/users/apartments/${search}`)
      .then(res => res.json())
      .then(data => setApartments(data));
  }, [apartments.length, setWhatever, setApartments, search]);
  debugger;

  // const center = [
  //   apartments[0].location[0].latitude,
  //   apartments[0].location[0].longitude,
  // ];

  // console.log(center);

  // const testFunction = () => {
  //   if (apartments.length <= 0) {
  //     return <h1>Loading content...</h1>;
  //   } else {
  //   }
  // };

  // let apartmentsBySpecificLocation = useStore(
  //   store => store.apartmentsBySpecificLocation
  // );
  // const fetchApartmentsBySpecificLocation = useStore(
  //   store => store.fetchApartmentsBySpecificLocation
  // );

  // useEffect(() => {
  //   fetchApartmentsBySpecificLocation(search);
  //   if (apartmentsBySpecificLocation.length > 0) {
  //     console.log(apartmentsBySpecificLocation);
  //   }
  // }, [apartmentsBySpecificLocation]);

  return (
    <>
      <Header />
      <PageBodyContainer>
        <div className="cards">
          <StaysInAreaCards />
        </div>

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
          scrollWheelZoom={false}
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
