import React from "react";
import "./UserPage.scss";
import { Header } from "../../components/Header/Header";
import { Nav } from "../../components/Nav/Nav";
import { ReturnNav } from "../../components/returnNav/ReturnNav";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Carrusel } from "../../components/Carrusel/Carrusel";
const UserPage = () => {
  return (
    <div className="home">
      <Header color="blue"/>
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
  )
}

export default UserPage