import React, { useRef, useState, useEffect } from "react";
import "./ListMenu.css";
import Loading from "../Loading/Loading";
import TreeMenu from "react-simple-tree-menu";
import "../../../node_modules/react-simple-tree-menu/dist/main.css";
import data from "../../json/menu";

const ListMenu = props => {
  const handleClick = e => {
    if (e.type === "t") {
      const tmpUrl = "https://statbank.hagstova.fo/api/v1/fo/H2/" + e.key;
      props.onClickItem(tmpUrl);
    }
  };
  if (data) {
    return (
      <div>
        <div
          style={{ fontWeight: "bold", fontSize: "1.3em", color: "#2d4182" }}
        >
          Hagtalsgrunnur
        </div>
        <div>
          <TreeMenu
            className="menu-item"
            data={data}
            onClickItem={handleClick}
          />
        </div>
      </div>
    );
  }

  return (
    <Loading type="cylon" color="#2d4182" height="20%" width="20%"></Loading>
  );
};

export default ListMenu;
