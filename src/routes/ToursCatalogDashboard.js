import React, { useEffect } from "react";
import { ToursCatalog } from "../containers";
import { getTours } from "../redux/actions/toursActions";
import { connect } from "react-redux";

const ToursCatalogDashboard = ({ getTours, tours, amount, page }) => {
  useEffect(() => {
    getTours(amount, page);
  }, [getTours, amount, page]);

  return <ToursCatalog tours={tours} />;
};

export default connect(
  state => {
    const { tours, amount, page } = state.toursModule;

    return {
      tours,
      amount,
      page
    };
  },
  dispatch => {

    return {
      getTours: (amount, page) => {
        dispatch(getTours(amount, page));
      }
    };
  }
)(ToursCatalogDashboard);
