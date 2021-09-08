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

type StoreType = {
  loggedUser: null | string;
  setLoggedUser: (param1: string) => void;
};

const useStore = create<StoreType>((set, get) => ({
  loggedUser: null,
  setLoggedUser: user => {
    set({ loggedUser: user });
  },
}));

export default useStore;
