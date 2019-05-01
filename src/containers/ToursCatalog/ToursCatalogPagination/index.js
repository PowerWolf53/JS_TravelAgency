import React from "react";
import style from "../css/catalog.module.css";
import "../fonts/font-awesome/css/font-awesome.min.css";

const ToursCatalogPagination = () => {
  return (
    <div className={style.pages}>
      <ul className="uui-pagination">
        <li className="actions-wrapper">
          <ul className="pagination-items">
            <li className="first-page ">
              <a href="#">
                <span>First</span>
              </a>
            </li>
            <li className="back-pages">
              <a href="#">
                <i className="fa fa-angle-double-left" />
              </a>
            </li>
            <li className="prev-page ">
              <a href="#">
                <i className="fa fa-angle-left" />
              </a>
            </li>
          </ul>
        </li>
        <li className="pages-wrapper">
          <ul className="pagination-items">
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#">6</a>
            </li>
            <li>
              <a href="#">7</a>
            </li>
            <li>
              <a href="#">8</a>
            </li>
            <li>
              <a href="#">9</a>
            </li>
            <li>
              <a href="#">10</a>
            </li>
          </ul>
        </li>
        <li className="actions-wrapper">
          <ul className="pagination-items">
            <li className="next-page">
              <a href="#">
                <i className="fa fa-angle-right" />
              </a>
            </li>
            <li className="forward-pages">
              <a href="#">
                <i className="fa fa-angle-double-right" />
              </a>
            </li>
            <li className="last-page">
              <a href="#">
                <span>Last</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ToursCatalogPagination
