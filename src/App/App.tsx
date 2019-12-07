import React, { useState } from "react";
import s from "./style.module.scss";
import Header from "../header/Header";
import Main from "../main/Main";

const App: React.FC = () => {

  return (
    <div className={s.App}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
