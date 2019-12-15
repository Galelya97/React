import React from "react";

import s from "./style.module.scss";
import Progress from "../../components/progress/Progress";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div className={s.About}>
      <h1>Prof skills</h1>
      <Progress title={'asda'} percent={50} />
    </div>
  );
};

export default About;
