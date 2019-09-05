import React, { useState, useEffect } from "react";
import "./ListMenu.css";
import axios from "axios";
import ListDisplay from "./ListDisplay";
import { useHttp } from "../../hooks/http";

const ListMenu = () => {
  const [isLoading, fetchedData] = useHttp(
    "http://statbank.hagstova.fo/api/v1/fo/H2",
    []
  );
  const [data, setData] = useState();

  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    setData(fetchedData);
  }, [fetchedData]);

  if (data) {
    console.log(data);
    return (
      <div>
        <div
          style={{ fontWeight: "bold", fontSize: "1.5em", color: "#2d4182" }}
        >
          Hagtalsgrunnur
        </div>
        <ListDisplay data={data}></ListDisplay>
      </div>
    );
  }
  return <div>loading...</div>;
};

export default ListMenu;
