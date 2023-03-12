import { useState } from "react";

import Card from "../Card/Card";
import CardData from "../../utils/CardData";
import './styles.css'


export default function CTA(
) {
  const [active, setActive] = useState({
    button1: false,
    button2: true,
  });

  const button1 = () => {
    setActive({
      button1: true,
      color2: false,
    });
  };

  const button2 = () => {
    setActive({
      button1: false,
      button2: true,
    });
  };
  return (
    <main
      className="main"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        width: "1440rem",
        alignItems: "center",
      }}
    >
      <div>
        <h1 className="choose-plan-title">Choose the right plan for you</h1>
        <p className="choose-plan-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. the point of
          using Lorem Ipsum is that it has a more-or-less
        </p>
      </div>

      {/* esses dois buttons... tenta fazer um só, plz */}
      <div className="action">
        <button
          onClick={button1}
          className="choose-plan-btn"
          style={
            active.button1
              ? {
                  background: "var(--defaultBlue )",
                  color: "#fff",
                  transition: "0.25s",
                }
              : { background: "#FFF", color: "#000", transition: "0.25s" }
          }
        >
          Monthly
        </button>
        <button
          onClick={button2}
          className="choose-plan-btn"
          style={
            active.button2
              ? {
                  background: "var(--defaultBlue )",
                  color: "#fff",
                  transition: "0.25s",
                }
              : { background: "#FFF", color: "#000", transition: "0.25s" }
          }
        >
          Yearly
        </button>
      </div>

      <div className="cards">
         {CardData.map((data) => (
          <>
            <Card
              plan={data.plan}
              label={data.label}
              bg={data.bg}
              price={active.button1 ? data.monthPrice: data.yearPrice}
              bg={data.background}
              advice={data.advice}
              features={data.features}
              buttonText={data.buttonText}
            />
          </>
        ))}
      </div>
    </main>
  );
}
