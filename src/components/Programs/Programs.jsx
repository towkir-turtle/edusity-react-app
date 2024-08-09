import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";

import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="app__programs container" id="program">
      <div className="app__program">
        <img src={program_1} alt="First program" />
        <div className="program-caption">
          <img src={program_icon_1} alt="Icon" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="app__program">
        <img src={program_2} alt="Second program" />
        <div className="program-caption">
          <img src={program_icon_2} alt="Icon" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="app__program">
        <img src={program_3} alt="Third program" />
        <div className="program-caption">
          <img src={program_icon_3} alt="Icon" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
