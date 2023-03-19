import React from 'react'
import { Card } from '../../components/Card/Card';
import { Header } from '../../components/Header/Header';
import { Nav } from '../../components/Nav/Nav';
import { ReturnNav } from '../../components/returnNav/ReturnNav';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import "./SearchPage.scss";

const SearchPage = () => {
  return (
    <div className='searchPage'>
        <Header color="blue"/>
        <ReturnNav text="Busqueda"/>
        <SearchInput/>
        <section className='searchPageSection'>
            <Card lenguage="CSS" level="Intermedio"/>
            <Card lenguage="HTML" level="Fácil"/>
        </section>
        <Nav/>
    </div>
  )
}

export default SearchPage