import React from "react";
import "./style.css";
import graphicDesign from "../../assets/pattern-graphic-design.svg";
import apps from "../../assets/pattern-apps.svg";
import illustrations from "../../assets/pattern-illustrations.svg";
import motionGraphics from "../../assets/pattern-motion-graphics.svg";
import photography from "../../assets/pattern-photography.svg";
import uiUx from "../../assets/pattern-ui-ux.svg";
const Skills = () => {
  return (
    <div className="skills">
      <div className="skill1">
        <img src={graphicDesign} alt="graphic design" className="skill1_img" />
        <p>Graphic Design</p>
      </div>
      <div className="skill2">
        <img src={uiUx} alt="UI/UX" className="skill2_img" />
        <p>UI/UX</p>
      </div>
      <div className="skill3">
        <img src={apps} alt="apps" className="skill3_img" />
        <p>Apps</p>
      </div>
      <div className="skill4">
        <img src={photography} alt="Photography" className="skill4_img" />
        <p>Photography</p>
      </div>
      <div className="skill5">
        <img src={illustrations} alt="Illustrations" className="skill5_img" />
        <p>Illustrations</p>
      </div>
      <div className="skill6">
        <img
          src={motionGraphics}
          alt="Motiom Graphics"
          className="skill6_img"
        />
        <p>Motiom Graphics</p>
      </div>
    </div>
  );
};

export default Skills;
