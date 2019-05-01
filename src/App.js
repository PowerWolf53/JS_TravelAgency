import React from "react";
import { Route, Switch } from "react-router-dom";

import { Header, Footer, Registrate, Login } from "./components";

import { ToursCatalogDashboard } from "./routes";

import {
  TOURS_CATALOG_DASHBOARD_ROUTE,
  REGISTRATE_ROUTE,
  LOGIN_ROUTE
} from "./constants/routes";

const routes = [
  {
    path: TOURS_CATALOG_DASHBOARD_ROUTE,
    exact: true,
    component: ToursCatalogDashboard
  },
  {
    path: REGISTRATE_ROUTE,
    exact: true,
    component: Registrate
  },
  {
    path: LOGIN_ROUTE,
    exact: true,
    component: Login
  }
];

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        {routes.map(({ path, ...rest }) => {
          return <Route key={path} path={path} {...rest} />;
        })}
      </Switch>
      <Footer />
    </>
  );
};

export default App;
