import React from "react";
import style from "./css/aside.module.css";
import { NavLink } from "react-router-dom";
import {
  LOGIN_ROUTE,
  REGISTRATE_ROUTE,
  TOURS_CATALOG_DASHBOARD_ROUTE
} from "../../constants/routes";

const Aside = () => {
  return (
    <div className={style.aside}>
      <NavLink className={style.link} to={TOURS_CATALOG_DASHBOARD_ROUTE}>
        <div className={style.element}>
          <span className={style.punkt}>Catalog</span>
        </div>
      </NavLink>
      <NavLink className={style.link} to={LOGIN_ROUTE}>
        <div className={style.element}>
          <span className={style.punkt}>Login</span>
        </div>
      </NavLink>
      <NavLink className={style.link} to={REGISTRATE_ROUTE}>
        <div className={style.element}>
          <span className={style.punkt}>Registration</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Aside;
