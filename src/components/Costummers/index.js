import Airbnb from "../../assets/airbnb.png";
import Google from "../../assets/google.png";
import Netflix from "../../assets/netflix60height.png";
import Slack from "../../assets/slack-logo.svg";
import UberLogo from "../../assets/uber-12logo.svg";

function Costumers() {
  return (
    <div className="costumers-div">
      <p className="customers-text">
        Trusted by over 47k+ happy costumers, including
      </p>
      <div
        className="costumers-img-div"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "500rem",
        }}
      >
        <img src={Slack} alt="Slack Logo" />
        <img src={Netflix} alt="Netflix Gray Logo" />
        <img src={Google} alt="Google Logo" />
        <img
          src={Airbnb}
          alt="Airbnb Logo"
          style={{
            margin: "0rem 0rem 10rem 0rem",
          }}
        />
        <img src={UberLogo} alt="Uber Logo" className="costumer-svg" />
      </div>
    </div>
  );
}

export default Costumers;
