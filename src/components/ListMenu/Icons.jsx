import React from "react";

export const openedIcon = mainColor => (
  <i
    className="fa fa-caret-up"
    style={{ color: mainColor }}
    aria-hidden="true"
    alt="-"
  ></i>
);

export const closedIcon = mainColor => (
  <i
    className="fa fa-caret-down"
    style={{ color: mainColor }}
    aria-hidden="true"
    alt="+"
  ></i>
);

export const tableIcon = () => (
  <i className="fa fa-table" aria-hidden="true" alt="table"></i>
);
