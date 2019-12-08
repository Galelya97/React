import React from "react";

import s from "./style.module.scss";

interface Props {
  title?: string;
}

const PanelMini: React.FC<Props> = props => {
  return (
    <div className={s.box}>
      <span className={s.title}>{props.title || ""}</span>
      <span className={s.line}>{""}</span>
      <div className={s.info}>{props.children}</div>
    </div>
  );
};

export default PanelMini;
