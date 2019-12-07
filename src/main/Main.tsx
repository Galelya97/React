import React from "react";
import {Redirect, Route, Switch} from 'react-router-dom';

import s from "./style.module.scss";

const Main: React.FC = () => {

  return (
    <main className={s.Main}>
      <Switch>
        <Route exact={true} path="/about" component={() => <div>About</div>} />
        <Route exact={true} path="/projects" component={() => <div>Projects</div>} />
        <Route exact={true} path="/skils" component={() => <div>Skils</div>} />
        <Redirect to="/about" />
      </Switch>
    </main>
  );
};

export default Main;
