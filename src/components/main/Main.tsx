import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import links from "../../links";

import s from "./style.module.scss";
import Sidebar from "../sidebar/Sidebar";

const Main: React.FC = () => {
  return (
    <main className={s.Main}>
      <Switch>
        {links.map((link, index) => (
          <Route key={index} exact={link.exact} path={link.to} component={link.component} />
        ))}
        <Redirect to="/about" />
      </Switch>
    </main>
  );
};

export default Main;
