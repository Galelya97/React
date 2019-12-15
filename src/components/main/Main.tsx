import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import links from "../../links";

import s from "./style.module.scss";
import Spinner from "../spinner/Spinner";

const Main: React.FC = () => {
  return (
    <main className={s.Main}>
      {/*<Spinner />*/}
      <Suspense fallback={<Spinner />}>
        <Switch>
          {links.map((link, index) => (
            <Route
              key={index}
              exact={link.exact}
              path={link.to}
              component={link.component}
            />
          ))}
          <Redirect to="/about" />
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
