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
    return menuArray;
  };

  async function getDataTree(statBankUrl) {
    const yourDataTree = await fetchDataTree(statBankUrl);
    await setData(yourDataTree);
  }

  useEffect(() => {
    setData(null);
    if (props.statBank === "https://statbank.hagstova.fo/api/v1/fo/H2/") {
      setData(staticData);
    } else {
      getDataTree(props.statBank);
    }
  }, [props.statBank]);

  const handleClick = e => {
    if (e.type === "t") {
      const tmpId = e.id;
      const tmpUrl = props.statBank + tmpId;
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
    <div>
      {/* <TreeMenu
        className="tree-item"
        data={staticData}
        onClickItem={handleClick}
      /> */}
      <div className="noData">heintar valmynd, vinarliga bíða</div>
      <Loading type="spin" color="#2d4182" height="5%" width="5%"></Loading>
    </div>
  );
};

export default ListMenu;
