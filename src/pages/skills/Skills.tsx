import React from "react";

import s from "./style.module.scss";

interface Props {}

const Skills: React.FC<Props> = () => {
  return (
    <div className={s.Skills}>
      <h1>Навыки</h1>
      <br/>
      <span>Skills</span>
    </div>
  );
};

export default Skills;
