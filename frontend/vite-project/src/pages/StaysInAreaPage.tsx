import React, { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";

import styled from "styled-components";
import Header from "../components/Header";
import StaysInAreaCards from "../components/StaysInAreaCards";
import Footer from "../components/Footer";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMapEvent,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

  .center .mySwiper {
    width: auto;
  }

  .center .swiper-button-next,
  .center .swiper-button-prev {
    color: white;
  }

  .center .swiper-pagination-bullet {
    --swiper-theme-color: white;
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

export default function StaysInAreaPage({
  userLoggedIn,
  setUserLoggedIn,
  userId,
}) {
  // Animated Panning

  const animateRef = useRef(true);

  let { search } = useParams();

  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/users/apartments/${search}`, {
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
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  loop={true}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src={apartment.imageUrl1}
                      alt={apartment.id}
                      height="150px"
                      width="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={apartment.imageUrl2}
                      alt={apartment.id}
                      height="150px"
                      width="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={apartment.imageUrl3}
                      alt={apartment.id}
                      height="150px"
                      width="100%"
                    />
                  </SwiperSlide>
                </Swiper>
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
      <Header
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
        userId={userId}
      />
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
