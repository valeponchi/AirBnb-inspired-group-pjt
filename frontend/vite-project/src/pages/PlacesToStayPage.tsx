import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Header from "../components/Header";
import useStore from "../store";

function PlacesToStayPage() {
  const loggedUser = useStore(state => state.loggedUser);
  const history = useHistory();

  useEffect(() => {
    if (!loggedUser) history.push("/login-host");
  }, [loggedUser]);
  return (
    <>
      <Header />
    </>
  );
}

export default styled(PlacesToStayPage)``;
