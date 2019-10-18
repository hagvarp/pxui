import React, { Fragment, useEffect, useState } from "react";
import "../../styles/style.css";
import Loading from "../Loading/Loading";
import TreeMenu from "react-simple-tree-menu";
import axios from "axios";

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
let tmpCounter = 0;

export default function ListMenu(props) {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);

  async function fetchData(url) {
    let fData;
    await axios
      .get(url)
      .then(response => {
        fData = response.data;
      })
      .catch(error => {});
    return fData;
  }
  //----------------------------------------------------------------
  //Without Promise.all
  // const fetchDataTree = async url => {
  //   //i assume you will handle the fetch with your own method
  //   let menuArray = await fetchData(url);

  //   for (let key in menuArray) {
  //     if (menuArray[key].type === "l") {
  //       menuArray[key].nodes = await fetchDataTree(
  //         url + "/" + menuArray[key].id
  //       );
  //     }
  //   }
  //Shows liveupdate
  //   if (menuArray !== undefined) {
  //     tmpCounter = tmpCounter + menuArray.length;
  //     setCounter(tmpCounter);
  //   }

  //   return menuArray;
  // };
  //----------------------------------------------------------------------
  const fetchDataTree = async url => {
    let menuArray = await fetchData(url);
    if (menuArray) {
      Promise.all(
        menuArray.map(async menuArray => {
          try {
            if (menuArray.type === "l") {
              menuArray.nodes = await fetchDataTree(url + "/" + menuArray.id);
            }
          } catch (error) {
            console.log(error);
            throw error;
          }
        })
      );
      //Shows liveupdate
      tmpCounter = tmpCounter + menuArray.length;
      setCounter(tmpCounter);

      return menuArray;
    }
  };

  async function getDataTree(statBank) {
    const dataTree = await fetchDataTree(statBank);
    await setData(dataTree);
    tmpCounter = 0;
  }

  useEffect(() => {
    setData(null);
    getDataTree(props.statBank.value || props.statBank);
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
      <div className="noData">heintar valmynda listan, vinarliga bíða</div>
      <div>{counter}</div>

      <Loading type="spin" color="#2d4182" height="5%" width="5%"></Loading>
    </div>
  );
}
