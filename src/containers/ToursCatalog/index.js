import React from "react";
import style from "./css/catalog.module.css";
import "./fonts/font-awesome/css/font-awesome.min.css";
import Tour from "./Tour";
import ToursCatalogPagination from "./ToursCatalogPagination";

const Catalog = ({ tours }) => {
  return (
    <div className={style.main}>
      <div className={style.main}>
        <div className={style.content}>
          {tours.length && tours.map(tour => <Tour key={tour.id} {...tour} />)}
        </div>
      </div>
      <ToursCatalogPagination />
    </div>
  );
};

export default Catalog;
