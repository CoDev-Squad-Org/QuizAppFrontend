import React from "react";
import "./PrincipalPage.scss";
import { Header } from "../../components/Header/Header";
import { Nav } from "../../components/Nav/Nav";
import { ReturnNav } from "../../components/returnNav/ReturnNav";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Carrusel } from "../../components/Carrusel/Carrusel";

export const PrincipalPage = () => {
  return (
    <div className="home">
      <Header />
      <ReturnNav text="Descubre" />
      <SearchInput />
      <section className="explorerSection">
        <span className="explorerSection__text">Mejor votados</span>
        <Carrusel />
        <span className="explorerSection__text">Más buscados</span>
        <Carrusel />
      </section>
      <Nav />
    </div>
  );
};
