import React from "react";
import s from "./style.module.scss";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <div className={s.App}>
      <Sidebar />
      <div className={s.Content}>
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
