import React from "react";
import style from "../css/catalog.module.css";

const Tour = ({ photo, type, cost }) => {

  return (
    <div className={style.element}>
      <img className={style.image} src={photo} alt='img' />
      <h4 className={style.label}> Type: {type} </h4>
      <h3 className={style.label}> Cost: {cost} </h3>
    </div>
  );
};

export default Tour