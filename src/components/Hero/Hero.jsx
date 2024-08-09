import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="app__hero container" id="hero">
      <div className="hero__text">
        <h2>We ensure better education for a better future</h2>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills , and experiences needed to excel in the dynamic
          field of education.
        </p>
        <button className="btn">
          Explore More <img src={darkArrow} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
