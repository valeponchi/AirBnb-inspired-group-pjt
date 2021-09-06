import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Logo({ className }) {
  return (
    <Link to="/">
      <img
        src="../src/assets/images/logo.png"
        alt="logo"
        className={className}
      />
    </Link>
  );
}

export default styled(Logo)`
  width: 150px;
`;
