import React, { useState, useEffect } from "react";
import { useHttp } from "../../hooks/http";
import "./ListMenu.css";
import ListItem from "./ListItem";

const ListMenu = () => {
  const [isLoading, fetchedData] = useHttp(
    "http://statbank.hagstova.fo/api/v1/fo/H2",
    []
  );
  const [getData, setGetData] = useState(null);
  let test = [];

  const handleChange = e => {
    fetchGetHttp(e);
  };
  //useEffect
  if (fetchedData) {
    for (let i = 0; i < fetchedData.length; i++) {
      let id = fetchedData[i].id;
      let text = fetchedData[i].text;
      test.push(
        <ListItem
          className="menu-item"
          text={text}
          id={id}
          callBack={handleChange}
        >
          {text}
        </ListItem>
      );
    }
  }
  const fetchGetHttp = async id => {
    await fetch("https://statbank.hagstova.fo/api/v1/fo/H2/" + id)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.text();
      })
      .then(response => {
        console.log(response);
        setGetData(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  return (
    <div>
      <div style={{ fontWeight: "bold", fontSize: "1.5em", color: "#2d4182" }}>
        Hagtalsgrunnur
      </div>
      {test}
    </div>
  );
};

export default ListMenu;
