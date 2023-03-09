import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Main from './components/Main/Main'
import Help from './components/Help/Help'
import Newsletter from './components/Newsletter/Newsletter'

import Card from "./components/Card/Card";
import dataCard from "./utils/CardData";

import Accordeon from "./components/Accordeon/Accordeon";
import dataAccordeon from "./utils/AccordionData";


import "./App.css";

export default function App() {
  return (
    <div
      className="container"
      style={{
        height: "6000px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "1440px",
        }}
      >
        <Header />
        <Hero />
        <Section />
        <Main/>

        {/* 1º
            data, aqui dentro do map, é os dados dentro daquele array, no caso os objetos contendo
            { titulo: 'coisaaqui', conteudo: 'coisasasasaqui' }
            e como temos, data.titulo, ele se remete ao elemento sendo passado atualmente no map
          */}
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {dataCard.map((data) => (
          <>
            <Card
              plan={data.plan}
              label={data.label}
              bg={data.background}  
              width={'300px'}
              price={data.price}
              advice={data.advice}
              features={data.features}
              buttonText={data.buttonText}
            />
          </>
        ))}</div>
        <Help/>
        {dataAccordeon.map((data) => (
          /* 2º
              Estamos fazendo o mapeamento do dataAccordeon, que é um array,
              esse array tem o total de elementos que queremos criar,
              por isso usamos arrays, ao inves de fazer na mão, e vai ter coisa que fazer na mão
              será impossívelx'x'
            */
          <>
            {/* 3º
                title={} content={} demos esses nomes, pois são requisitos da função dentro de Accordeon.jsx
                fazendo isso, conseguimos passar dados diferentes e facilitar a passagem dos dados entre componentes
               */}
            <Accordeon title={data.titulo} content={data.conteudo} />
          </>
        ))}
      </div>
        <Newsletter/>
    </div>
  );
}
