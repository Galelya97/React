import React from "react";

import s from "./style.module.scss";
import { Doughnut } from "react-chartjs-2";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <div className={s.About}>
      <Doughnut
        data={{
          labels: ['React', 'Angular', 'Vue'],
          datasets: [
            {
              label: '# of Votes',
              data: [60, 30, 10],
              backgroundColor: [
                "#00d8ff",
                "#b52e31",
                "#42b883",
              ],
              borderWidth: 0
            }
          ]
        }}
      />
    </div>
  );
};

export default About;
