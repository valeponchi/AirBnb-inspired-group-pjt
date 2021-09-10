import React, { useRef } from "react";

import styled from "styled-components";

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

const FlexMapDiv = styled.div`
  .map-container {
    height: 82vh;
    width: 100%;

    position: relative;

    display: grid;

    z-index: auto;
  }

  .map {
    height: 100vh;
  }

  .mySwiper {
    width: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }

  .swiper-pagination-bullet {
    --swiper-theme-color: white;
  }
`;

function SetViewOnClick({ animateRef }) {
  const map = useMapEvent("click", e => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || true,
    });
  });

  return null;
}

export default function FlexibleMap({ handleClick, apartments }) {
  const animateRef = useRef(true);

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
          zoom={11}
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
    <FlexMapDiv>
      <div className="map map-container">
        {toRender()}
        {/* <button className="flexible-main-button" onClick={() => handleClick()}>
          Show List <AiOutlineUnorderedList />
        </button> */}
      </div>
    </FlexMapDiv>
  );
}
