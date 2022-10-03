import React from "react";
import "../CSS/Main.css";

export const SkillsColumn = (props) => {
  const stripes = (index) => {
    if (index === 0 || index % 2 === 0) {
      return "skillCont";
    } else {
      return "skillCont tan";
    }
  };

  const skills = (section, chunkType) => {
    if (section && chunkType) {
      return chunkType.map((chunk, index) => (
        <React.Fragment key={chunkType.indexOf(chunk)}>
          <div className={stripes(index)}>{skillList(chunk)}</div>
        </React.Fragment>
      ));
    }
  };

  const skillList = (chunk) => {
    const skills = Object.values(chunk);
    if (skills[0] && !skills[1]) {
      return (
        <ul className="skills">
          <li>{skills[0]}</li>
        </ul>
      );
    } else if (skills[1] && !skills[2]) {
      return (
        <ul className="skills">
          <li>{skills[0]}</li>
          <li>{skills[1]}</li>
        </ul>
      );
    } else if (skills[2] && !skills[3]) {
      return (
        <ul className="skills">
          <li>{skills[0]}</li>
          <li>{skills[1]}</li>
          <li>{skills[2]}</li>
        </ul>
      );
    } else if (skills[3]) {
      return (
        <ul className="skills">
          <li>{skills[0]}</li>
          <li>{skills[1]}</li>
          <li>{skills[2]}</li>
          <li>{skills[3]}</li>
        </ul>
      );
    } else return null;
  };

  return (
    <div className="skillsListInner">
      {skills(props.section, props.chunkType)}
    </div>
  );
};
