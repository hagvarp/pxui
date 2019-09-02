import React, { useState, useEffect } from "react";
import "./ListMenu.css";
import axios from "axios";
import ListDisplay from "./ListDisplay";

const ListMenu = () => {
  const [data, setData] = useState([]);
  const [tmpData, setTmpData] = useState([]);

  const [toggle, setToggle] = useState(true);
  useEffect(async () => {
    await axios
      .get("https://statbank.hagstova.fo/api/v1/fo/H2")
      .then(json => setData(json.data));
  }, []);

  const handleClick = async e => {
    const newData = [...data];
    console.log(e);
    await axios
      .get("https://statbank.hagstova.fo/api/v1/fo/H2/" + e.id)
      .then(json => setTmpData(json.data));
    console.log(tmpData);

    newData[0].add(tmpData);

    setData(newData);
    console.log(data);
  };

  return (
    <div>
      <div style={{ fontWeight: "bold", fontSize: "1.5em", color: "#2d4182" }}>
        Hagtalsgrunnur
      </div>
      {data.map((element, index) => {
        return <div onClick={() => handleClick(element)}>{element.text}</div>;
      })}
    </div>
  );
};

export default ListMenu;
