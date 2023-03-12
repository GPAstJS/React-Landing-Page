import React from "react";
import DashboardImg from "../../assets/dashboard.png";
import PlayCircle from "../../assets/play.svg";
import "./styles.css";

export default function Hero() {
  return (
    <div className="hero-container-div">
      <div className="hero-main-div">
        <div className="hero-content-div">
          <div
            className="hero-text-div"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="hero-title">
              Your Next Performance Management Platform
            </h1>
            <p className="hero-paragraph">
              Fully Customizable performance management platform that suits your
              culture. Not the other way around.
            </p>
          </div>
          <div className="hero-links-div">
            <a className="hero-link1" href="#">
              Request a Quote
            </a>
            <div className="watch-video-div">
              <img
                className="play-icon-img"
                src={PlayCircle}
                alt=""
                style={{
                  padding: "6rem",
                  border: "1rem solid #fff",
                  borderRadius: "100%",
                }}
              />
              <a href="#" className="watch-video-link">
                Watch Video
              </a>
            </div>
          </div>
          <img
            src={DashboardImg}
            alt=""
            className="myimg"
            style={{
              position: "absolute",
              left: "770rem",
              top: "45rem",
              overflow: "hidden",
            }}
          />
        </div>
      </div>
    </div>
  );
}
