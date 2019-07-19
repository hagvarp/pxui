import React, { useState, useEffect } from "react";
import { useHttp } from "../../hooks/http";
import "./ListMenu.css";

const ListMenu = () => {
  const [isLoading, fetchedData] = useHttp(
    "http://statbank.hagstova.fo/api/v1/fo/H2",
    []
  );

  const handleClick = () => {
    console.log("clicked");
  };
  let x = null;
  if (fetchedData) {
    x = fetchedData.map(item => {
      return (
        <div
          className="alpa"
          onClick={handleClick}
          style={{ fontWeight: "bold", fontSize: "1.1em" }}
        >
          {item.text}
        </div>
      );
    });
  }
  return (
    <div>
      <div style={{ fontWeight: "bold", fontSize: "1.5em", color: "#2d4182" }}>
        Hagtalsgrunnur
      </div>
      {x}
    </div>
  );
};

export default ListMenu;
