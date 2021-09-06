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
  apartmentsBySpecificLocation: {}[];
  fetchApartmentsBySpecificLocation: (param1: string) => void;
};

const useStore = create<StoreType>((set, get) => ({
  apartmentsBySpecificLocation: [],
  fetchApartmentsBySpecificLocation: search => {
    fetch(`http://localhost:4000/users/apartments/${search}`)
      .then(res => res.json())
      .then(data => {
        set({ apartmentsBySpecificLocation: data });
      });
  },

  // search: "",
  // setSearch: location => {
  //   set({ search: location });
  // },
}));

export default useStore;
