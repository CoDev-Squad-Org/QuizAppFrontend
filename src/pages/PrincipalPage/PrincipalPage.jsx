import React from "react";
import "./PrincipalPage.scss";
import { Header } from "../../components/Header/Header";
import { Nav } from "../../components/Nav/Nav";

export const PrincipalPage = () => {
  return (
    <div className="home">
      <Header />
      <div>
        este es el home
      </div>
      <Nav />
    </div>
  );
};
