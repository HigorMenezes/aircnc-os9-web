import React from "react";

import { Container } from "./styles";

import logo from "../../assets/logo.svg";

import Routes from "../../routes";

const AppLayout = () => (
  <Container>
    <img src={logo} alt="AirCnC" />
    <div className="content">
      <Routes />
    </div>
  </Container>
);

export default AppLayout;
