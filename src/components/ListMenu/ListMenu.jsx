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
const ListMenu = props => {
  const [data, setData] = useState(null);

  async function fetchData(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
  const mainUrl = "https://statbank.hagstova.fo/api/v1/fo/H2/";

  const fetchDataTree = async url => {
    //i assume you will handle the fetch with your own method
    let countryArr = await fetchData(url);

    for (let key in countryArr) {
      if (countryArr[key].type === "l") {
        countryArr[key].nodes = await fetchDataTree(
          url + "/" + countryArr[key].id
        );
        console.log(countryArr[key].nodes);
      }
    }
    return countryArr;
  };

  async function getDataTree() {
    const yourDataTree = await fetchDataTree(mainUrl);
    setData(yourDataTree);
    console.log("------------");
    console.log(yourDataTree);
    console.log("-----------");
    console.log(staticData);
  }

  useEffect(async () => {
    getDataTree();
  }, []);

  const handleClick = e => {
    if (e.type === "t") {
      const tmpId = e.id;
      const tmpUrl = "https://statbank.hagstova.fo/api/v1/fo/H2/" + tmpId;
      props.onClickItem(tmpUrl);
    }
  };
  if (data) {
    return (
      <Fragment>
        <div className="headLine">Hagtalsgrunnur</div>
        <TreeMenu className="tree-item" data={data} onClickItem={handleClick} />
      </Fragment>
    );
  }

  return (
    <Loading type="spin" color="#2d4182" height="20%" width="20%"></Loading>
  );
};

export default ListMenu;
