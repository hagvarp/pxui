import React, { useState, useEffect } from "react";
import "./ListMenu.css";
import { useHttp } from "../../hooks/http";

const ListMenu = () => {
  const [isLoading, fetchedData] = useHttp(
    "http://statbank.hagstova.fo/api/v1/fo/H2",
    []
  );
  if (fetchedData) {
    fetchedData.forEach((element, index) => {
      console.log(element.id); // 100, 200, 300
      console.log(element.text); // 100, 200, 300
      fetch("https://statbank.hagstova.fo/api/v1/fo/H2/" + element.id)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch.");
          }
          return response.json();
        })
        .then(data => {
          data.forEach((data, index) => {
            console.log(data.id); // 100, 200, 300
            console.log(data.text); // 100, 200, 300
          });
          console.log("------------");
        })
        .catch(err => {
          console.log(err);
        });
    });
  }

  return (
    <div>
      <div style={{ fontWeight: "bold", fontSize: "1.5em", color: "#2d4182" }}>
        Hagtalsgrunnur
      </div>
    </div>
  );
};

export default ListMenu;
