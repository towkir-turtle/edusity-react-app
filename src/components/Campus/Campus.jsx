import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="app__campus" id="campus">
      <div className="gallery">
        <img src={gallery_1} alt="gallery img" />
        <img src={gallery_2} alt="gallery img" />
        <img src={gallery_3} alt="gallery img" />
        <img src={gallery_4} alt="gallery img" />
      </div>
      <button className="btn dark-btn">See More <img src={white_arrow} alt="Arrow icon" /></button>
    </div>
  );
};

export default Campus;