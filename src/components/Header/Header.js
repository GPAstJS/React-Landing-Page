import { useState } from "react";
import "./styles.css";

export default function Header() {
  const [display, setDisplay] = useState(true);

  const login = () => {
    sessionStorage.setItem("username", "Guilherme");
    setDisplay(!display);
  };

  const logout = () => {
    sessionStorage.removeItem("username")
    setDisplay(!display )
  }
 
  return (
    <header
      className="header"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        className="header-container"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <div>
          <h1 className="header-logo">LOGO HERE</h1>
        </div>

        <nav className="nav-bar">
          <a href="_blank" className="nav-link">
            Products
          </a>
          <a href="_blank" className="nav-link">
            Solutions
          </a>
          <a href="_blank" className="nav-link">
            Pricing
          </a>
        </nav>

        <div className="user-account">
          {display ? (
            <>
              <button
                className="nav-link"
                id="sign-in"
                style={{
                  cursor: 'pointer',
                  border: 'none',

                }}
              >
                Sign In
              </button>
              <button className="nav-link" id="create-account" onClick={login}>
                Start Free
              </button>
            </>
          ) : (
            <>
              <butto href="" className="nav-link" onClick={logout} style={{
                margin: '0rem 0rem 0rem 0rem',
                padding: '0rem 0rem 0rem 0rem',
                cursor: 'pointer'
              }}>Logout</butto>
              <button
                className="nav-link"
                style={{
                  fontSize: "15rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "normal",
                  border: "none",
                  background: "#fff",
                  color: "#000  ",
                  height: "40rem",
                  borderRadius: "2rem",
                  width: "120rem",
                  padding: "0rem 0rem 0rem 0rem",
                  margin: "0rem 0rem 0rem 0rem",
                }}
              >
                {sessionStorage.getItem("username")}
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
