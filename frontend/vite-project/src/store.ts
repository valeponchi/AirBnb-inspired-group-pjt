import React from "react";
import create from "zustand";

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
  location: [Location];
};

type Location = {
  id: number;
  latitude: number;
  longitude: number;
  apartmentId: number;
};

type StoreType = {
  searchLocation: string;
  setSearchLocation: (param1: string) => void;

  apartmentsBySpecificLocation: {}[];
  fetchApartmentsBySpecificLocation: (param1: string) => void;
};

const useStore = create<StoreType>((set, get) => ({
  searchLocation: "london",
  setSearchLocation: location => {
    set({ searchLocation: location });
  },

  apartmentsBySpecificLocation: [],
  fetchApartmentsBySpecificLocation: location => {
    fetch(`http://localhost:4000/users/apartments/${location}`)
      .then(res => res.json())
      .then(data => {
        set({ apartmentsBySpecificLocation: data });
      });
  },
}));

export default useStore;
