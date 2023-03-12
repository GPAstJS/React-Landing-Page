
import ManImage from '../../assets/man-image.png'
import CircleImage from '../../assets/round-image.png'

import "./styles.css";

export default function Section() {
  return (
    <section className="features-section">

      <div className="features-section-container">
      <div className="section-div">
        <h1 className="featuresh1">Our Features</h1>
        <p id="features-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less
        </p>
      </div>

      <div className="section-div">
        <img src={CircleImage} alt="" className="hero-img1"/>
      <div className="section-text">
        <h2 className="section-text-title">Manage everything in one workspace</h2>
        <p className="section-text-paragraph">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
        </p>
      </div>
      </div>

      <div className="section-div">
        <img src={ManImage} alt="" className="hero-img2"/>
      <div className="section-text">
        <h2 className="section-text-title">Set up in minutes  </h2>
        <p className="section-text-paragraph">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
        </p>
      </div>
      </div>

      </div>
    </section>
  );
}
