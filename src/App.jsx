import "./App.css";

import React from "react";

import Accordeon from "./components/Accordeon/Accordeon";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Costummers from "./components/Costummers";
import Help from './components/Help/Help'
import Newsletter from './components/Newsletter/Newsletter'
import Section from "./components/Section/Section";

import CTA from './components/trueCTA/CTA'

import dataAccordeon from "./utils/AccordionData";

export default function App() {
  return (
    <div
      className="container"
      style={{
        width: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "column",
        margin: '0rem 0rem 0rem 0rem',
        padding: '0rem 0rem 0rem 0rem'
      }}
    >
      <div className="box"
        style={{
          margin: '0rem 0rem 0rem 0rem',
          display: 'flex', 
          alignItems: 'center',
          flexDirection: 'column',
          width: "1440rem",
          padding: '0rem 0rem 0rem 0rem',
          overflowX: 'hidden',
        }}
      >
        <Header />
        <Hero />
        <Costummers />
        <Section />

        <CTA />
        <Help/> 

        {dataAccordeon.map((data) => (
          <>
            <Accordeon title={data.titulo} content={data.conteudo} />
          </>
        ))}

        <Newsletter/>
        <Footer/> 
      </div>
    </div>
  );
}
