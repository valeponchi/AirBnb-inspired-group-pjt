import React from "react";
import styled from "styled-components";

import { GrMapLocation } from "react-icons/gr";

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

const FlexApartDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  grid-gap: 1rem;

  place-items: center;

  padding: 1rem;
  margin: 0px 100px;

  .flex-card {
    display: grid;
    place-items: center;

    margin: 2 rem;

    height: 300px;
    width: 270px;
  }

  .image img {
    border-radius: 10px;
  }

  .top {
    display: grid;
    grid-template-columns: 1fr auto;

    grid-gap: 1.2rem;
  }

  .flexible-main-button {
  }

  .mySwiper {
    width: 250px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }

  .swiper-pagination-bullet {
    --swiper-theme-color: white;
  }

  .no-wrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export type Apartment = {
  id: number;
  priceNight: number;
  bedrooms: number;
  maxPeopleIn: number;
  description: string;
  city: string;
  postCode: string;
  road: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  userOwnerId: number;
  userRentingId: null;
  location: [
    id: number,
    latitude: number,
    longitude: number,
    apartmentId: number
  ];
};

type FlexProps = {
  handleClick: () => void;
  apartments: Apartment[];
};

export default function FlexibleApartments({
  handleClick,
  apartments,
}: FlexProps) {
  console.log(apartments);

  function toRender() {
    if (apartments.length > 0) {
      return (
        <>
          {apartments.map((apartment, index: number) => (
            <div className="flex-card" key={index}>
              <div className="image">
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
                      alt=""
                      height="250px"
                      width="250px"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={apartment.imageUrl2}
                      alt=""
                      height="250px"
                      width="250px"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={apartment.imageUrl3}
                      alt=""
                      height="250px"
                      width="250px"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="info">
                <div className="top">
                  <h4>
                    {apartment.postCode}, {apartment.city}
                  </h4>
                  <p>${apartment.priceNight} / night</p>
                </div>
                <p className="bottom">{apartment.road}</p>
              </div>
            </div>
          ))}
        </>
      );
    } else {
      return <h4>Loading...</h4>;
    }
  }
  return <FlexApartDiv>{toRender()}</FlexApartDiv>;
}
