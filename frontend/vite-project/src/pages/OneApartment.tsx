import React, { useEffect } from "react";
import { useHistory } from "react-router";
import useStore from "../store";

export default function OneApartment() {
  const loggedUser = useStore(state => state.loggedUser);
  const history = useHistory();

  useEffect(() => {
    if (!loggedUser) history.push("/login-host");
  }, [loggedUser]);
  return null;
}
