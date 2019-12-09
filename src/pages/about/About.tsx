import React, { useCallback, useEffect, useState } from "react";

import s from "./style.module.scss";
import { Doughnut } from "react-chartjs-2";

interface Props {}

const About: React.FC<Props> = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let int = 0;
    setInterval(() => {
      int++;
      setCount(int);
    }, 50);
  }, []);

  return (
    <div className={s.About}>
      <Doughnut
        data={{
          labels: ["React", "Angular", "Vue"],
          datasets: [
            {
              label: "# of Votes",
              data: [60, 30, 10],
              backgroundColor: ["#00d8ff", "#b52e31", "#42b883"],
              borderWidth: 0
            }
          ]
        }}
      />
      <div>
        <div className={`${s.boom} ${s[count % 26]}`} />
      </div>
    </div>
  );
};

export default About;
