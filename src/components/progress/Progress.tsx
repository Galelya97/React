import React from "react";

import s from "./style.module.scss";

interface Props {
  percent: number;
  title?: string;
}

const Progress: React.FC<Props> = ({percent, title}) => {
  const style = {
    width: `${percent}%`
  };
  return (
    <div className={s.wrapper}>
      {title && <span className={s.title}>{title}</span>}
    <div className={s.progress}>
      <span className={s.result} style={style} >
        <span className={s.full} />
      </span>
    </div>
    </div>
  );
};

export default Progress;
