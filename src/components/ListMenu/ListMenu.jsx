import React, { Fragment, useEffect, useState } from "react";
import "../../styles/style.css";
import Loading from "../Loading/Loading";
import TreeMenu from "react-simple-tree-menu";

//Json file of treeMenu
import staticData from "../../json/menu";

//CSS from the library
//import "../../../node_modules/react-simple-tree-menu/dist/main.css";
/*
Change in library: react-simple-tree-menu
Files: walk.d.ts, main.js
"key" to "id"
"label" to "text"
*/
//let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let tmpCounter;

const ListMenu = props => {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);

  async function fetchData(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
  const fetchDataTree = async url => {
    //i assume you will handle the fetch with your own method
    let menuArray = await fetchData(url);

    for (let key in menuArray) {
      if (menuArray[key].type === "l") {
        menuArray[key].nodes = await fetchDataTree(
          url + "/" + menuArray[key].id
        );
      }
    }
    if (isNaN(menuArray.length)) {
      tmpCounter = "Error - Database blocking fetch";
    } else {
      tmpCounter = tmpCounter + menuArray.length;
    }

    setCounter(tmpCounter);
    return menuArray;
  };

  async function getDataTree(statBank) {
    const dataTree = await fetchDataTree(statBank);
    await setData(dataTree);
    tmpCounter = 0;
  }

  useEffect(() => {
    setData(null);
    if (
      props.statBank === "https://statbank.hagstova.fo/api/v1/fo/H2/" ||
      props.statBank.value === "https://statbank.hagstova.fo/api/v1/fo/H2/"
    ) {
      setData(staticData);
    } else {
      tmpCounter = 0;
      getDataTree(props.statBank.value);
    }
  }, [props.statBank]);

  const handleClick = e => {
    if (e.type === "t") {
      const mainUrl = props.statBank.value || props.statBank;
      const tmpId = e.id;
      const tmpUrl = mainUrl + tmpId;
      props.onClickItem(tmpUrl);
    }
  };
  let headline = props.statBank.label || "Hagtalsgrunnurin";
  if (data) {
    return (
      <Fragment>
        <div className="headLine">{headline}</div>
        <TreeMenu className="tree-item" data={data} onClickItem={handleClick} />
      </Fragment>
    );
  }

  return (
    <div>
      {/* <TreeMenu
        className="tree-item"
        data={staticData}
        onClickItem={handleClick}
      /> */}
      <div className="noData">
        heintar valmynda listan, vinarliga bíða: {counter}
      </div>
      <Loading type="spin" color="#2d4182" height="5%" width="5%"></Loading>
    </div>
  );
};

export default ListMenu;
