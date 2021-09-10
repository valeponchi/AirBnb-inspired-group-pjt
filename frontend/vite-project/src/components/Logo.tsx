import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AirBnbLogo from "../assets/images/logo.png"

function Logo({ className }) {
  return (
    <Link to="/">
      <img
        src={AirBnbLogo}
        alt="logo"
        className={className}
      />
    </Link>
  );
}

export default styled(Logo)`
  width: 150px;
`;
