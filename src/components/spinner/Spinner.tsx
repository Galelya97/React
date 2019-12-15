import * as React from "react";

import s from "./style.module.scss";

type Props = {};

const Spinner: React.FC<Props> = () => {
  return (
    <div className={s.spinner}>
    </div>
  );
};

export default Spinner;
