import hero from "../assets/hero.png";
import "./HeroBanner.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <>
      <section className="hero">
        {/* left hero section here */}
        <div className="leftHero">
          <h1>Adidas Forest Hills</h1>
          <div className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <p>
            The adidas Originals Forest Hill is one of those classic tennis
            shoes that made it through summer and winter no matter the weather.
            First appeared in 1976 as a prototype test-version with a release
            later in 1977, the Forest Hill was named after the Forrest Hill US
            Open location in Queens, New York.
          </p>
          <a href="#featuredShoes" className="btn">
            Buy Now
          </a>
        </div>
        {/* right hero section here */}
        <div className="rightHero">
          <img src={hero} alt="Adidas Forest Hill" />
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
