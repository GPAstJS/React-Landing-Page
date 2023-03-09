import { useState } from "react";

import "./styles.css";
export default function Main() {
  const [active, setActive] = useState({
    color1: false,
    color2: true,
  });

  const button1 = () => {
    setActive({
      ...active,
      color1: true,
      color2: false,
    });
  };

  const button2 = () => {
    setActive({
      ...active,
      color1: false,
      color2: true,
    });
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "50px",
        alignItems: "center",
      }}
    >
      <div>
        <h1
          style={{
            color: "#1F5FBA",
            fontSize: "50px",
          }}
        >
          Choose the right plan for you
        </h1>
        <p
          style={{
            width: "860px",
            fontSize: "16px",
          }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. the point of
          using Lorem Ipsum is that it has a more-or-less
        </p>
      </div>

      <div className="action">
        <button
          onClick={button1}
          className="choose-plan-btn"
          id="btn1"
          style={
            active.color1
              ? { background: '#1f5fba', color: "#fff", transition: '0.25s' }
              : { background: "#FFF", color: "#000", transition: '0.25s' }
          }
        >
          Monthly
        </button>
        <button
          onClick={button2}
          className="choose-plan-btn"
          id="btn2"
          style={
            active.color2
              ? { background: '#1f5fba', color: "#fff", transition: '0.25s' }
              : { background: "#FFF", color: "#000", transition: '0.25s' }
          }
        >
          Yearly
        </button>
      </div>
    </main>
  );
}
